import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
    products: [],
    product: {},
    loading: false
};

export const index = createAsyncThunk('product/index', async (data = {}) => {
    try {
        const response = await axios.get(`${config.api}/products`, {
            params: data,
            headers: config.header(),
          });
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const show = createAsyncThunk('product/show', async (id) => {
    try {
        const response = await axios.get(`${config.api}/products/${id}`, config.header());
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const destroy = createAsyncThunk('product/destroy', async (product) => {
    try {
        const response = await axios.delete(`${config.api}/products/${product.id}`, config.header());
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const update = createAsyncThunk('product/updateProduct', async (product) => {
    try {
        const response = await axios.put(`${config.api}/products/${product.id}`, product, config.header());
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const store = createAsyncThunk('product/store', async (product) => {
    try {
        const response = await axios.post(`${config.api}/products`, product, config.header());
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        remove: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(index.pending, (state) => {
                state.loading = true;
            })
            .addCase(index.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(index.rejected, (state, action) => {
                console.error('Error fetching products:', action.error);
                state.loading = false;
            })

            .addCase(show.pending, (state) => {
                state.loading = true;
            })
            .addCase(show.fulfilled, (state, action) => {
                state.product = action.payload;
                state.loading = false;
            })
            .addCase(show.rejected, (state, action) => {
                console.error('Error fetching product:', action.error);
                state.loading = false;
            });
    },
})

export const { remove } = productSlice.actions

export default productSlice.reducer