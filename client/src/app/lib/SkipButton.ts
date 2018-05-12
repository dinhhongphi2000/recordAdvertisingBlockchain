import * as videojs from 'video.js';
var ComponentVideoJS = videojs.getComponent('Component');

export class SkipButton {
    private component: any;
    private player : any;
    private superComponent : any

    constructor() {
        let self = this;
        this.component = videojs.extend(ComponentVideoJS, {
            constructor: function (player, options) {
                ComponentVideoJS.apply(this, arguments);
                self.player = player;
                self.superComponent = this;
                self.countDownToCloseAds(player)
            },
            createEl: function () {
                return videojs.dom.createEl('div', {
                    className: 'vjs-skip-button'
                });
            },
        });
    }

    getComponent() {
        return this.component;
    }

    /**
     * @description Allow click button skip advertisement in minimum time
     * @param player videojs player
     * @param maxTime minimum time to skip advertisement
     */
    private countDownToCloseAds(player, maxTime = 3) {
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
                self.superComponent.on('click', function () {
                    player.ads.endLinearAdMode()
                    player.trigger('ads-ad-started');
                    player.removeChild('skipButton');
                });
            }
        }, 1000)
    }

    /**
     * @description update text on skip button
     * @param text 
     */
    private updateTextContent(text) {
        if (typeof text !== 'string') {
            text = 'Title Unknown';
        }
        videojs.dom.emptyEl(this.superComponent.el());
        videojs.dom.appendContent(this.superComponent.el(), text);
    }
}