import { Lightning } from '@lightningjs/sdk'

export class Card extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 350,
      h: 460,
      x: 960,
      y: 540,
      mount: 0.5,
    }
  }
}
