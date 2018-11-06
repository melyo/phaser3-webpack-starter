import 'phaser'
import SampleScene from './scene/sample'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [SampleScene]
};

window.onload = () => {
    new Phaser.Game(config)
}
