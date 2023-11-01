import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const ordersAdapter = createEntityAdapter({
    selectId: (order) => order.id,
});

const filters = {
    orderNumberFilter : "",
    customerFilter: "",
    extruderFilter: "",
    filmMarkFilter: "",
    filmThicknessFilter: "",
    filmColorFilter: "",
    widthFilter: ""
}

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

export const loadPassportQuality = createAsyncThunk(
    '@@orders/load-passport-quality',
    async(id, {
        extra: {client, api}
    }) => {
        return client.get(api.PASSPORT+"/"+id, {responseType: 'blob'})
    }
)

const ordersSlice = createSlice({
    name: '@@orders',
    initialState: ordersAdapter.getInitialState({
        loading: 'idle',
        error: null,
        filters: filters
    }),
    reducers : {
        setOrderNumberFilter: (state, action) => {
            state.filters.orderNumberFilter = action.payload
        },
        setCustomerFilter: (state, action) => {
            state.filters.customerFilter = action.payload
        },
        setExtruderFilter: (state, action) => {
            state.filters.extruderFilter = action.payload
        },
        setFilmMarkFilter: (state, action) => {
            state.filters.filmMarkFilter = action.payload
        },
        setFilmThicknessFilter: (state, action) => {
            state.filters.filmThicknessFilter = action.payload
        },
        setFilmColorFilter: (state, action) => {
            state.filters.filmColorFilter = action.payload
        },
        setWidthFilter : (state, action) => {
            state.filters.widthFilter = action.payload
        },
        clearFilters: (state) => {
            state.filters = filters
        }
    },
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
            // .addCase(createOrder.fulfilled, (state, action) => {
            //     ordersAdapter.addOne(state, action.payload.data)
            // })
            .addCase(updateOrder.fulfilled, (state, action) => {
                ordersAdapter.setOne(state, action.payload.data) 
            })
            .addCase(loadPassportQuality.fulfilled, (state, action) => {
                console.log(action)
                const id = action.meta.arg
                const blob = action.payload.data;  
                const link = document.createElement("a");  
                link.href = URL.createObjectURL(blob);  
                link.download = `${id}.xlsx`;  
                document.body.appendChild(link);  
                link.click(); 
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
})

export const {setOrderNumberFilter, setWidthFilter, setCustomerFilter, setFilmMarkFilter, setFilmThicknessFilter, setFilmColorFilter, clearFilters, setExtruderFilter} = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer;
export const ordersSelector = ordersAdapter.getSelectors(state => state.orders);

export const visibleOrdersSelector = (orders, filters) => {
    // const extrudersSet = new Set(extruders.filter(extruder => extruder.extruderName.toLowerCase().includes(filters.extruderFilter.toLowerCase())).map(e=>e.id))
    // const filteredFilms = new Set(films.filter(
    //     film => film.mark.toLowerCase().includes(filters.filmMarkFilter.toLowerCase())
    //         && film.thickness.toString().toLowerCase().includes(filters.filmThicknessFilter.toLowerCase())
    //         && film.color.toLowerCase().includes(filters.filmColorFilter.toLowerCase())
    //         ).map(film => film.id));
    return orders.filter(order => 
        // extrudersSet.has(order.extruderID)
            // && filteredFilms.has(order.filmID)
            order.orderNumber.toString().toLowerCase().includes(filters.orderNumberFilter.toLowerCase())
            // && order.customer.toLowerCase().includes(filters.customerFilter.toLowerCase())
            && order.width.toString().toLowerCase().includes(filters.widthFilter.toString().toLowerCase())
    );
}