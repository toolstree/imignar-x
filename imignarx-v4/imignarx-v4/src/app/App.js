import { Router } from "./Router.js";
import { Events } from "./Events.js";

export const App = {

    start() {

        const root = document.querySelector("#app");

        if (!root) {
            throw new Error("#app not found");
        }

        Router.mount(root);

        Events.bind();

        console.log("🌿 ImignarX V4 Started");

    }

};
