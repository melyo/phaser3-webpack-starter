import { AUTO, Game } from 'phaser'
import SampleScene from './scene/sample'

const config = {
    title: 'Sample Game',
    parent: 'sample game',
    version: '1.0',

    width: 1000,
    height: 600,
    type: AUTO,

    scene: [ SampleScene ]
}

window.onload = () => {
    new Game(config)
}
