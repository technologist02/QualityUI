import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const ordersAdapter = createEntityAdapter({
    selectId: (order) => order.id,
});

export const loadOrders = createAsyncThunk(
    '@@orders/load-orders',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ORDERS)
    }
)

export const createOrder = createAsyncThunk(
    '@@orders/create-order',
    async (order, {
        extra: {client, api}
    }) => {
        return client.post(api.ORDERS, order)
    }
)

export const updateOrder = createAsyncThunk(
    '@@orders/update-order',
    async (order, {
        extra: {client, api}
    }) => {
        return client.patch(api.ORDERS, order)
    }
)

const ordersSlice = createSlice({
    name: '@@orders',
    initialState: ordersAdapter.getInitialState({
        loading: 'idle',
        error: null
    }),
    reducers : {},
    extraReducers: builder => {
        builder
            .addCase(loadOrders.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                ordersAdapter.addMany(state, action.payload.data);
            })
            .addCase(loadOrders.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                ordersAdapter.addOne(state, action.payload.data)
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                ordersAdapter.setOne(state, action.payload.data) 
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
})

export const ordersReducer = ordersSlice.reducer;
export const ordersSelector = ordersAdapter.getSelectors(state => state.orders);