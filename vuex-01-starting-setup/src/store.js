import { createStore } from 'vuex'

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(currentState) {
            currentState.counter = currentState.counter + 1;
        },
        increase(currentState, payload) {
            currentState.counter = currentState.counter + payload.myNum;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        counterTimesTwo(state) {
            return state.counter * 2;
        },
        counter(state) {
            return state.counter;
        }
    }
};

const authModule = {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(currentState, payload) {
            currentState.isLoggedIn = payload.auth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { auth: true });
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
}

const store = createStore({
    modules: {
        counter: counterModule,
        auth: authModule
    },
});

export default store;