import { IonPage } from '@ionic/react'
import Phaser from 'phaser'
import { Game } from '../scenes/Game'
import { Preload } from '../scenes/Preload'
import './Tab1.css'

const Tab1: React.FC = () => {
  const config: any = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 0 },
        // debug: true,
      },
    },
    dom: {
      createContainer: true,
    },
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Preload, Game],
  }
  new Phaser.Game(config)

  return <IonPage></IonPage>
}

export default Tab1
