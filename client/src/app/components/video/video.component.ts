import { Component, AfterViewChecked, Input } from '@angular/core';
import * as videojs from 'video.js';
import { AdvertisementService } from '../../services/advertisement.service'
import { Advertisement } from '../../models/Advertisement'
import '../../../../node_modules/videojs-contrib-ads/dist/videojs.ads.js'
import { SkipButton } from '../../lib/SkipButton';

var adRunNext = 0
var adInited = 0;

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
    let skipButton = new SkipButton();
    var self = this;
    this.player = videojs('example_video_1', {
      controls: true,
      autoplay: true,
      preload: true,
    }, function () {

    })

    // Register the component with Video.js, so it can be used in players.
    videojs.registerComponent('skipButton', skipButton.getComponent());

    this.player.on('readyforpreroll', () => {
      console.log('readyforpreroll');
      self.player.ads.startLinearAdMode();

      //get random advetisement
      self.advertisementService.getRandom().subscribe((data: Advertisement) => {
        self.player.src({
          src:  data.url,
          type: 'video/mp4'
        });
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





