// src/slices/products.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_LINK = import.meta.env.VITE_API_URL;

// async thunk to fetch products
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axios.get(`${API_LINK}/products?limit=100`);
        return res.data.products;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
