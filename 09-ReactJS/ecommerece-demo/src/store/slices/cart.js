import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        products: [],
        total: 0,
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existing = state.products.find(i => i.id === product.id);

            if (existing) {
                if (product.stock > existing.quantity) existing.quantity += 1;
            } else {
                state.products.push({ ...product, quantity: 1 });
            }
            state.count += 1;
            state.total += product.price;
        },
        incrementItem(state, action) {
            const product = action.payload;
            const existing = state.products.find(i => i.id === product.id);
            if (existing && existing.stock > existing.quantity) {
                existing.quantity += 1;
                state.count += 1;
                state.total += existing.price;
            }
        },
        decrementItem(state, action) {
            const product = action.payload;
            const existing = state.products.find(i => i.id === product.id);
            if (existing && existing.quantity > 1) {
                existing.quantity -= 1;
                state.count -= 1;
                state.total -= existing.price;
            } else if (existing && existing.quantity === 1) {
                state.total -= existing.price;
                state.products = state.products.filter(i => i.id !== product.id);
                state.count -= 1;
            }
        },
        removeFromCart(state, action) {
            const product = action.payload;
            const existing = state.products.find(i => i.id === product.id);
            if (existing) {
                state.count -= existing.quantity;
                state.total -= existing.price * existing.quantity;
                state.products = state.products.filter(i => i.id !== product.id);
            }
        }
    }
});

export const { addToCart, incrementItem, decrementItem, removeFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;





