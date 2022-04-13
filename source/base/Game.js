import { Stage, Graphics, Shape, Ticker, Text } from '@createjs/EaselJS'
import { CONFIG } from '@/config'
import { handleResize } from '@/utils'
import { Turntable } from '@/obj/Turntable'
import { Plate } from '@/obj/Plate'

export class Game {
  constructor(canvas) {
    this.canvas = canvas
  }
  init() {
    this.stage = new Stage(this.canvas)

    // let _shape = new Shape()
    // _shape.graphics.beginFill('DarkRed')
    // _shape.graphics.drawCircle(0, 0, 40)
    // this.stage.addChild(_shape)

    // const turnTable = new Turntable(this.stage, 400, 400)
    // const plate = new Plate(this.stage, '../assets/奇迹.png', 100, 100)
    // plate.load()
    const turnTable = new Turntable(this.stage, 0, 0)
    turnTable.load()

    Ticker.framerate = CONFIG.framerate
    // let flag = false
    let tickCount = 0
    let pow = 1
    Ticker.on('tick', () => {
      tickCount++
      if (turnTable.speed) {
        if (tickCount >= turnTable.speed) {
          turnTable.rotate()
          tickCount = 0
          pow = 2
        }
      }
      if (turnTable.isSpeedUp && tickCount % 30 == 0) {
        turnTable.speed += pow
        pow = pow * pow * pow
        console.log(turnTable.speed)
      }
      if (turnTable.speed > 1000) {
        turnTable.isSpeedUp = false
        turnTable.speed = 0
        turnTable.rotate()
        // TODO show result
        setTimeout(() => {
          turnTable.speed = 30
        }, 5000)
      }
      this.update()
    })

    // const graphics = new Graphics()
    //   .beginFill('#EBE97A')
    //   .drawRect(CONFIG.canvasWidth / 2, CONFIG.canvasHeight / 2, 380, 100)
    // const shape = new Shape(graphics)
    // shape.regX = 190
    // shape.regY = 50

    // const welcomeText = new Text('CreateJS Boilerplate', '26px Courier', '#EB4646')
    // welcomeText.regX = welcomeText.getBounds().width / 2
    // welcomeText.regY = welcomeText.getBounds().height / 2
    // welcomeText.x = CONFIG.canvasWidth / 2
    // welcomeText.y = CONFIG.canvasHeight / 2

    // this.stage.addChild(shape, welcomeText)

    handleResize(this.canvas, this.stage)
    window.onresize = () => handleResize(this.canvas, this.stage)
    // TODO STAGE
    // TODO Load source packages (graphics/sounds)
    // TODO store 状态树初始化
  }
  update() {
    this.stage.update()
  }
  exit() {}
}
