import { createStore } from "vuex";
import authModule from "./auth/index.js";
import cartModule from "./cart/index.js";
import productsModule from "./products/index.js";

const store = createStore({
    modules: {
        auth: authModule,
        cart: cartModule,
        products: productsModule
    }
});

export default store;
