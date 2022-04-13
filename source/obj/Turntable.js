import { CONFIG } from '@/config'
import { Bitmap, Container, Shape, Shadow, Text } from '@createjs/EaselJS'
import { relics } from './goods'
import { Plate } from './Plate'

export class Turntable {
  constructor(stage, x, y) {
    this.container = new Container()
    this.container.x = x
    this.container.y = y
    const btn = new Container()
    const text = new Text('START', '40px Times', '#000')
    text.textAlign = 'center'
    text.textBaseLine = 'middle'
    const shape = new Shape()
    shape.graphics.beginFill('#ffe000').drawRect(0, 0, 200, 80)
    shape.shadow = new Shadow('#000', 2, 2, 8)
    btn.addChild(shape, text)
    btn.regX = 100
    btn.regY = 40
    btn.cursor = 'pointer'
    btn.x = 300
    btn.y = 400
    text.x = btn.regX
    text.y = btn.regY - 10
    btn.addEventListener('click', (e) => {
      this.start()
    })
    stage.enableMouseOver()
    stage.addChild(btn)

    this.plates = relics.map((e) => {
      const url = require('@/assets/' + e + '.png')
      console.log(url)
      return new Plate(stage, url, x, y)
    })
    const pos = [
      [100, 100],
      [200, 100],
      [300, 100],
      [400, 100],
      [500, 100],
      [500, 200],
      [500, 300],
      [500, 400],
      [500, 500],
      [400, 500],
      [300, 500],
      [200, 500],
      [100, 500],
      [100, 400],
      [100, 300],
      [100, 200],
    ]
    for (let i = 0; i < pos.length; i++) {
      const [x, y] = pos[i]
      console.log(x, y)
      this.plates[i].move(x, y)
      this.plates[i].change()
    }
    this.speed = 30
    this.chosenIdx = 0
    this.isSpeedUp = false
  }
  load() {}
  rotate() {
    console.log(this.chosenIdx)
    this.plates[this.chosenIdx].isChosen = false
    this.plates[this.chosenIdx].isRes = false
    this.plates[this.chosenIdx].change()
    this.chosenIdx += 1
    this.chosenIdx %= 16
    this.plates[this.chosenIdx].isChosen = true
    if (this.speed == 0) this.plates[this.chosenIdx].isRes = true
    this.plates[this.chosenIdx].change()
  }
  start() {
    // time(s)
    this.isSpeedUp = true
    this.speed = 1
  }
}
