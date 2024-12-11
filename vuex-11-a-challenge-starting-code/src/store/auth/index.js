const authModule = {
    namespaced: true,
    store() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.auth;
        }
    },
    actions: {
        login(contex) {
            contex.commit('setAuth', { auth: true });
        },
        logout(context) {
            context.commit('setAuth', { auth: false });
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
};

export default authModule;