import { CONFIG } from '@/config'
import { Bitmap, ColorFilter, Container, Shape } from '@createjs/EaselJS'

export class Plate {
  constructor(stage, url, x, y) {
    this.x = x
    this.y = y
    this.url = url
    this.container = new Container()
    this.container.regX = 0
    this.container.regY = 0
    // const imgUrl = this.url
    // const img = new Image()
    // img.src = imgUrl
    this.bmp = new Bitmap(this.url.default)
    this.border = new Shape()
    this.border.graphics.beginStroke('#FFFFFF')
    this.border.graphics.setStrokeStyle(10)
    this.border.graphics.drawRect(0, 0, 100, 100)
    this.border.regX = 50
    this.border.regY = 50
    this.border.alpha = 0
    this.container.addChild(this.bmp, this.border)
    stage.addChild(this.container) // 先挂载到stage
    this.load()

    this.isChosen = false
    this.isRes = false
  }

  // 由于bitmap需预加载，所以单独列出来
  async load() {
    return new Promise((resolve, reject) => {
      this.bmp.image.onload = () => {
        const scale = this.bmp.getBounds().width / 100
        this.bmp.scaleX = 1 / scale
        this.bmp.scaleY = 1 / scale
        this.bmp.x = this.x
        this.bmp.y = this.y
        this.bmp.regX = this.bmp.getBounds().width / 2
        this.bmp.regY = this.bmp.getBounds().height / 2
        console.log('加载成功')
        resolve()
      }
    })
  }
  move(x, y) {
    this.x = x
    this.y = y
    this.bmp.x = x
    this.bmp.y = y
    this.border.x = x
    this.border.y = y
  }
  change() {
    // ...
    console.log('CHANGE:', this.isChosen, this.isRes)
    if (this.isChosen) {
      this.border.alpha = 1
      if (this.isRes) {
        this.border.filters = [new ColorFilter(0, 0, 0, 1, 0, 0, 255, 0)]
        this.border.cache(0, 0, 100, 100)
      } else {
        this.border.filters = [new ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)]
        this.border.cache(0, 0, 100, 100)
      }
    } else {
      this.border.alpha = 0
    }
  }
  end() {
    // time(s)
  }
}
