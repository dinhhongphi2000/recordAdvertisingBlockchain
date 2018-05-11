import { Component, AfterViewChecked, Input } from '@angular/core';
import * as videojs from 'video.js';
import { AdvertisementService } from '../../services/advertisement.service'
import { Advertisement } from '../../models/Advertisement'
import '../../../../node_modules/videojs-contrib-ads/dist/videojs.ads.js'
import '@videojs/http-streaming'
var ComponentVideoJS = videojs.getComponent('Component');
var adRunNext = 0
var adInited = 0;

var skipButton = videojs.extend(ComponentVideoJS, {
  constructor: function (player, options) {
    ComponentVideoJS.apply(this, arguments);
    this.countDownToCloseAds(player)
  },

  createEl: function () {
    return videojs.createEl('div', {
      className: 'vjs-skip-button'
    });
  },

  countDownToCloseAds(player, maxTime = 3) {
    this.updateTextContent("Skip in " + maxTime);
    let self = this
    let timeout: number
    timeout = <any>setInterval(function () {
      --maxTime
      self.updateTextContent("Skip in " + maxTime);
      if (maxTime <= 0) {
        self.updateTextContent("Click to skip ads");
        window.clearInterval(timeout);
        //allow close ads
        self.on('click', function () {
          player.ads.endLinearAdMode()
          player.trigger('ads-ad-started');
          player.removeChild('skipButton');
        });
      }
    }, 1000)
  },

  updateTextContent: function (text) {
    if (typeof text !== 'string') {
      text = 'Title Unknown';
    }
    videojs.emptyEl(this.el());
    videojs.appendContent(this.el(), text);
  }
});

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewChecked {
  player: any = undefined

  constructor(private advertisementService: AdvertisementService) { }

  @Input('src') src: String

  ngAfterViewChecked() {
    if (this.src && this.player == undefined) {
      this.initPlayer();
    }
  }

  initPlayer() {
    var self = this;
    this.player = videojs('example_video_1', {
      controls: true,
      autoplay: true,
      preload: true,
    }, function () {

    })

    // Register the component with Video.js, so it can be used in players.
    videojs.registerComponent('skipButton', skipButton);
    console.log(self.player.src())

    this.player.on('readyforpreroll', () => {

      console.log('readyforpreroll');
      self.player.ads.startLinearAdMode();

      //get random advetisement
      self.advertisementService.getRandom().subscribe((data: Advertisement) => {
        self.player.src({
          src: '/api/advertisements/' + data.index,
          type: 'video/mp4',
          withCredentials: true
        });

        console.log('/api/advertisements/' + data.index)
      })

      //trigger to remove spinner
      self.player.on('adplaying', function () {
        self.player.trigger('ads-ad-started');
      });

      // resume content when all your linear ads have finished
      self.player.on('adended', function () {
        console.log('adended');
        self.player.ads.endLinearAdMode();
        self.player.removeChild('skipButton', { text: 'Skip' });
      });
    })

    //show advetising every 15 minius
    this.player.on('timeupdate', function () {
      var currentTime = self.player.currentTime();
      if (self.shouldPlayAd(currentTime)) {
        self.player.addChild('skipButton', { text: 'Skip' });
        adRunNext = currentTime + 119;
        console.log('play ads');
        if (!adInited) {
          self.player.ads();
          adInited = 1;
        }
        self.player.trigger('adsready');
      }
    });
  }
  //play advertisement or not
  shouldPlayAd(currentTime) {
    let time = currentTime - adRunNext;
    if (time >= 0) {
      return true;
    } else {
      return false;
    }
  }
}





