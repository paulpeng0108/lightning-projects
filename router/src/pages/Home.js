import { Lightning, Utils, Router } from "@lightningjs/sdk";

export class Home extends Lightning.Component {
    static _template(){
        return {
            Background: {
                w: 1920,
                h: 1080,
                color: 0xff0000ff,
                rect: true
            },
/*             Logo: {
                mountX: 0.5,
                mountY: 1,
                x: 960,
                y: 600,
                src: Utils.asset('images/logo.png'),
            }, */
            Text: {
                mount: 0.5,
                x: 960,
                y: 50,
                text: {
                    text: "Home page",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xff000000,
                },
            },
            NavIndicator: {
                x: 1820,
                y: 540,
                mount: 0.5,
                flex: {},
                Arrow: {
                    src: Utils.asset("images/arrow.png"),
                    rotation: Math.PI * 0.5
                },
                Label: {
                    text: {
                        text: "About"
                    }
                }
            },
        }
    }

    _handleRight(){
        Router.navigate("about")
    }
    
    _handleLeft(){
        Router.focusWidget("Menu")
    }
}