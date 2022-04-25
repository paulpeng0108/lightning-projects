import {Home} from "../pages/Home"
import {Boot} from "../pages/Boot"
import {NotFound} from "../pages/NotFound"

export default {
    routes: [
        {
            path: '$',
            component: Boot
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: 'home',
            component: Home
        }
    ]
}