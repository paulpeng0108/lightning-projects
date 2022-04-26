import {Home} from "../pages/Home"
import {Boot} from "../pages/Boot"
import {NotFound} from "../pages/NotFound"
import {About} from "../pages/About"

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
            component: Home,
            widgets: ["Menu"]
        },
        {
            path: "about",
            component: About,
            widgets: ["Menu"]
        },
        {
            path: "about/:someData",
            component: About,
            widgets: ["Menu"]
        }
    ],
    beforeEachRoute: (from, to) => {
        // can just return boolean , from, to
        return new Promise((resolve, reject) => {
            let loggedIn = true 

            if(to._hash == "about" && !loggedIn){
                console.log("not logged in")
                resolve(from)
            } else {
                console.log("Welcome user")
                resolve(true)
            }
        })
    },

    afterEachRoute: (to) => {
        console.log("navigated to ", to._hash)
    },
}