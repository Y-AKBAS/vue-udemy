import { createStore } from "vuex";
import coaches from "./modules/coaches/index.js";
import requests from "./modules/requests/index.js"

const store = createStore({
    modules: {
        coaches,
        requests
    }
});

export default store;