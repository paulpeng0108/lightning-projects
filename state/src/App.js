/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
    static getFonts() {
        return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
    }

    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xfffbb03b
            },
            Text: {
                x: 50,
                y: 50,
                text: {
                    text: "Light",
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xbbffffff,
                },
            },
        }
    }

    _init() {
        this.theme = "Light"
    }

    _handleEnter(){
        console.log("_handleEnter")
        if(this.theme === "Dark"){
            this.theme = "Light"
            this._setState("LightTheme")
        } else {
            this.theme = "Dark"
            this._setState("DarkTheme")
        }
    }

    /* 
    _handleUp
    _handleDowe
    _handleLeft
    _handleRight

    _handleEnter
    _handleBack
    */

    static _states(){
        return [
            class DarkTheme extends this {
                $enter(){
                    this.tag("Background").patch({
                        color: 0xff000000
                    })

                    this.tag("Text").patch({
                        text: {
                            text: "Dark"
                        },
                    })
                }

                $exit(){
                    this.tag("Background").patch({
                        color: 0xfffbb03b
                    })

                    this.tag("Text").patch({
                        text: {
                            text: "Light"
                        },
                    })
                }
            },

            class LightTheme extends this {
                $enter(){
                    this.tag("Background").patch({
                        color: 0xfffbb03b
                    })

                    this.tag("Text").patch({
                        text: {
                            text: "Light"
                        },
                    })
                }

                $exit(){
                }
            }
        ]
    }
}
