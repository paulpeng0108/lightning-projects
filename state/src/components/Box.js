import { Lightning } from "@lightningjs/sdk";

export class Box extends Lightning.Component {
    static _template(){
        return {
            rect: true,
            w: 50,
            h: 50,
            color: 0xff0000ff
        }
    }

    _focus(){
        this.patch({
            color: 0xffff0000
        })
    }
    
    _unfocus(){
        this.patch({
            color: 0xff0000ff
        })
    }

    _handleEnter(){
        console.log(`box ${this.letter} has been selected`)
    }
}