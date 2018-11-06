import phaserLogo from '../assets/logo.png'

class SampleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'SampleScene'
        })
    }

    preload() {
        this.load.image('logo', phaserLogo);
    }

    create() {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}

export default SampleScene
