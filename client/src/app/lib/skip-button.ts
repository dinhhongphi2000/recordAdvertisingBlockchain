import * as videojs from 'video.js';
var ComponentVideoJS = videojs.getComponent('Component');

let SkipButton = videojs.extend(ComponentVideoJS, {
    player : undefined,
    constructor: function (player, options) {
        ComponentVideoJS.apply(this, arguments);
        this.player = player
    },

    createEl: function () {
        return videojs.createEl('div', {
            className: 'vjs-skip-button'
        });
    },

    countDownToCloseAds(maxTime = 3) {
        this.updateTextContent("Skip in " + maxTime);
        let self = this
        let timeout: number
        timeout = <any>setInterval(function () {
            --maxTime
            if (maxTime <= 0) {
                window.clearInterval(timeout);
                //allow close ads
                this.on('click', function () {
                    self.ads.endLinearAdMode()
                    self.trigger('ads-ad-started');
                    self.removeChild('skipButton');
                });
            }

        }, 1)
    },

    updateTextContent: function (text) {
        if (typeof text !== 'string') {
            text = 'Title Unknown';
        }
        videojs.emptyEl(this.el());
        videojs.appendContent(this.el(), text);
    }
});

export = SkipButton