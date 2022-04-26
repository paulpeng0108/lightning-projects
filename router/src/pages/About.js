import { Lightning, Utils, Router } from "@lightningjs/sdk";

export class About extends Lightning.Component {
    static _template(){
        return {
            Background: {
                w: 1920,
                h: 1080,
                color: 0xff0000ff,
                rect: true
            },
            Text: {
                mount: 0.5,
                x: 960,
                y: 50,
                text: {
                    text: "About page",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xff000000,
                },
            },
            NavIndicator: {
                x: 100,
                y: 540,
                mount: 0.5,
                flex: {},
                Arrow: {
                    src: Utils.asset("images/arrow.png"),
                    rotation: Math.PI * -0.5
                },
                Label: {
                    text: {
                        text: "Home"
                    }
                }
            }
        }
    }

    set params({someData}){
        console.log("params", someData)
    }

/*     _handleLeft(){
        Router.navigate("home")
    } */

    _handleLeft(){
        Router.focusWidget("Menu")
    }
}