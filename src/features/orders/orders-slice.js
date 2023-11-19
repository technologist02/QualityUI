import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const ordersAdapter = createEntityAdapter({
    selectId: (order) => order.orderQualityId,
});

const initialFilters = {
    OrderNumber: {
        value: "",
        status: false
    },
    Customer: {
        value: "",
        status: false
    },
    Extruder: {
        value: "",
        status: false
    },
    FilmMark: {
        value: "",
        status: false
    },
    FilmThickness: {
        value: "",
        status: false
    },
    FilmColor: {
        value: "",
        status: false
    },
    Width: {
        value: "",
        status: false
    },
}

export const loadOrders = createAsyncThunk(
    '@@orders/load-orders',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ORDERS)
    }
)

export const searchOrders = createAsyncThunk(
    '@@orders/search-orders',
    async (query, {
        extra: {client, api}
    }) => {
        return client.get(api.SEARCH_ORDERS+query)
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
        filters: initialFilters,
        query: ""
    }),
    reducers : {
        setOrderNumberFilter: (state, action) => {
            state.filters.OrderNumber.value = action.payload;
            state.filters.OrderNumber.status = true;
        },
        setOrderNumberFilterStatus: (state, action) => {
            state.filters.OrderNumber.status = !state.filters.OrderNumber.status
        },
        setCustomerFilter: (state, action) => {
            state.filters.Customer.value = action.payload;
            state.filters.Customer.status = true;
        },
        setCustomerFilterStatus: (state, action) => {
            state.filters.Customer.status = !state.filters.Customer.status
        },
        setExtruderFilter: (state, action) => {
            state.filters.Extruder.value = action.payload;
            state.filters.Extruder.status = true;
        },
        setExtruderFilterStatus: (state, action) => {
            state.filters.Extruder.status = !state.filters.Extruder.status
        },
        setFilmMarkFilter: (state, action) => {
            state.filters.FilmMark.value = action.payload;
            state.filters.FilmMark.status = true;
        },
        setFilmMarkFilterStatus: (state, action) => {
            state.filters.FilmMark.status = !state.filters.FilmMark.status
        },
        setFilmThicknessFilter: (state, action) => {
            state.filters.FilmThickness.value = action.payload;
            state.filters.FilmThickness.status = true;
        },
        setFilmThicknessFilterStatus: (state, action) => {
            state.filters.FilmThickness.status = !state.filters.FilmThickness.status
        },
        setFilmColorFilter: (state, action) => {
            state.filters.FilmColor.value = action.payload;
            state.filters.FilmColor.status = true;
        },
        setFilmColorFilterStatus: (state, action) => {
            state.filters.FilmColor.status = !state.filters.FilmColor.status
        },
        setWidthFilter: (state, action) => {
            state.filters.Width.value = action.payload;
            state.filters.Width.status = true;
        },
        setWidthFilterStatus: (state, action) => {
            state.filters.Width.status = !state.filters.Width.status;
        },
        setSearch: (state, action) => {
            const f = Object.keys(state.filters).filter(key => state.filters[key].status === true).map(key => (`${key}=${state.filters[key].value}`));
            if (f) {
                state.query = `?${f.join("&")}`;
                // dispatchEvent(searchOrders(state.query))
            }
            // state.query = `?${f.join("&")}`;
            // state.filters.keys.filter(key => state.filters[key].status === true).foreach(key => state.query+=(`${key}=${state.filters[key].value}`))
        },
        clearFilters: (state) => {
            state.filters = initialFilters;
            state.query = "";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadOrders.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                ordersAdapter.setAll(state, action.payload.data);
            })
            .addCase(loadOrders.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(searchOrders.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(searchOrders.fulfilled,(state, action) => {
                state.loading = 'fulfilled';
                console.log(action.payload)
                ordersAdapter.setAll(state, action.payload.data);
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                alert("Данные заказа успешно добавлены");
                //state.query ? loadOrders() : searchOrders(state.query);
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                ordersAdapter.setOne(state, action.payload.data) 
            })
            .addCase(loadPassportQuality.fulfilled, (state, action) => {
                console.log(action)
                const id = action.meta.arg
                
                //console.log(number)
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

export const {
    setOrderNumberFilter,
    setOrderNumberFilterStatus,
    setWidthFilter,
    setWidthFilterStatus,
    setCustomerFilter,
    setCustomerFilterStatus,
    setFilmMarkFilter,
    setFilmMarkFilterStatus,
    setFilmThicknessFilter,
    setFilmThicknessFilterStatus,
    setFilmColorFilter,
    setFilmColorFilterStatus,
    clearFilters,
    setSearch,
    setExtruderFilter,
    setExtruderFilterStatus
} = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer;
export const ordersSelector = ordersAdapter.getSelectors(state => state.orders);

// export const visibleOrdersSelector = (orders, filters) => {
//     // const extrudersSet = new Set(extruders.filter(extruder => extruder.extruderName.toLowerCase().includes(filters.extruderFilter.toLowerCase())).map(e=>e.id))
//     // const filteredFilms = new Set(films.filter(
//     //     film => film.mark.toLowerCase().includes(filters.filmMarkFilter.toLowerCase())
//     //         && film.thickness.toString().toLowerCase().includes(filters.filmThicknessFilter.toLowerCase())
//     //         && film.color.toLowerCase().includes(filters.filmColorFilter.toLowerCase())
//     //         ).map(film => film.id));
//     return orders.filter(order => 
//         // extrudersSet.has(order.extruderID)
//             // && filteredFilms.has(order.filmID)
//             order.orderNumber.toString().toLowerCase().includes(filters.orderNumberFilter.toLowerCase())
//             // && order.customer.toLowerCase().includes(filters.customerFilter.toLowerCase())
//             && order.width.toString().toLowerCase().includes(filters.widthFilter.toString().toLowerCase())
//     );
// }