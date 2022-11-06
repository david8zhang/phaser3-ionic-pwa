export class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  create() {
    this.add.text(100, 100, 'Hello world!')
  }
}
