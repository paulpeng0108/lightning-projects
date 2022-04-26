import { Lightning, Router } from "@lightningjs/sdk";
import {MenuItem} from "./MenuItem"

export class Menu extends Lightning.Component {
    static _template(){
        return {
            x: -500,
            transitions: {
                x: {
                    duration: 0.5,
                    timingFunction: "cubic-bezier(0.17, 0.9, 0.32, 1)"
                }
            },
            Background: {
                rect: true,
                w: 500,
                h: 1080,
                color: 0xffffbb33
            },
            MenuItems: {
                x: 150,
                y: 540,
                mountY: 0.5,
                flex: {
                    direction: "column",
                },
                Item1: {
                    type: MenuItem,
                    pageName: "Home"
                },
                Item2: {
                    type: MenuItem,
                    pageName: "About"
                }
            }
        }
    }

    _init(){
        console.log("init")
        this.index = 0
    }

    _handleUp(){
        if(this.index > 0){
            this.index--
        }
    }

    _handleDown(){
        if(this.index < this.tag("MenuItems").children.length - 1){
            this.index++
        }
    }

    _handleRight(){
        Router.focusPage()
    }
    
    _handleEnter(){
        Router.focusPage();
        Router.navigate(this.getActiveItem().pageName)
    }

    getActiveItem(){
        return this.tag("MenuItems").children[this.index]
    }

    _getFocused(){
        return this.getActiveItem()
    }

    _focus(){
        this.patch({
            smooth: {
                x: -100
            }
        })
    }

    _unfocus(){
        this.patch({
            smooth: {
                x: -500
            }
        })
    }


}