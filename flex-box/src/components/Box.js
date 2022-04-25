import { Lightning } from "@lightningjs/sdk";

export class Box extends Lightning.Component {
    static _template(){
        return {
            rect: true,
            w: 100,
            h: 100,
            //https://gist.github.com/lewispeel/2431b9caa5f4e75cae8b9bb174482483
            color: this.bindProp('customProp'),
            flexItem: {
                margin: 10
            },
            Lebel: {
                mount: 1,
                x: (w => w),
                y: (w => w),
                text: {
                    text: this.bindProp("label")
                }
            }
        }
    }

    _construct(){
        console.log("_construct")
    }

    _build(){
        console.log("_build")
    }

    _setup(){
        console.log("_setup")
    }

    _init(){
        console.log("_init")
    }

    _enable(){
        console.log("_enable")
    }

    _disable(){
        console.log("_disable")
    }

}