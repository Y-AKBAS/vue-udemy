const cartModule = {
    namespaced: true,
    store() {
        return {
            items: [],
            total: 0,
            qty: 0
        };
    },
    mutations: {
        add(state, payload) {
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === payload.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: payload.id,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += payload.price;
        },
        remove(state, payload) {
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === payload.id
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        }
    },
    actions: {
        add(context, payload) {
            context.commit('add', payload);
        },
        remove(context, payload) {
            context.commit('remove', payload);
        }
    },
    getters: {
        getCart(state) {
            return {
                items: state.items,
                total: state.total,
                qty: state.qty
            };
        }
    }
};

export default cartModule;