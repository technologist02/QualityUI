import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const standartFilmsAdapter = createEntityAdapter({
    selectId: (standart) => standart.standartQualityFilmId,
});

const initialFilters = {
    Mark: {
        value: "",
        status: false
    },
    Thickness: {
        value: "",
        status: false
    },
    Color: {
        value: "",
        status: false
    },
    StandartTitle: {
        value: "",
        status: false
    }
}

export const loadStandartFilms = createAsyncThunk(
    '@@standart-films/load-standart-films',
    async (query="", {
        extra: {client, api}
    }) => {
        return client.get(api.STANDART_FILMS+query)
    }
)

export const createStandartFilm = createAsyncThunk(
    '@@standart-films/create-standart-film',
    async (standart, {
        extra: {client, api}
    }) => {
        return client.post(api.STANDART_FILMS, standart)
    }
)

export const updateStandartFilm = createAsyncThunk(
    '@@standart-films/update-standart-film',
    async (standart, {
        extra: {client, api}
    }) => {
        return client.patch(api.STANDART_FILMS, standart)
    }
)

const standartFilmsSlice = createSlice({
    name: '@@standart-films',
    initialState: standartFilmsAdapter.getInitialState({
        loading: 'idle',
        error: null,
        filters: initialFilters,
        query: ""
    }),
    reducers:{
        setMarkFilter: (state, action) => {
            state.filters.Mark.value = action.payload;
            state.filters.Mark.status = true;
        },
        setMarkFilterStatus: (state) => {
            state.filters.Mark.status = !state.filters.Mark.status
        },
        setThicknessFilter: (state, action) => {
            state.filters.Thickness.value = action.payload;
            state.filters.Thickness.status = true;
        },
        setThicknessFilterStatus: (state) => {
            state.filters.Thickness.status = !state.filters.Thickness.status
        },
        setColorFilter: (state, action) => {
            state.filters.Color.value = action.payload;
            state.filters.Color.status = true;
        },
        setColorFilterStatus: (state) => {
            state.filters.Color.status = !state.filters.Color.status
        },
        setStandartTitleFilter: (state, action) => {
            state.filters.StandartTitle.value = action.payload;
            state.filters.StandartTitle.status = true;
        },
        setStandartTitleFilterStatus: (state) => {
            state.filters.StandartTitle.status = !state.filters.StandartTitle.status;
        },
        setSearch: (state, action) => {
            const f = Object.keys(state.filters).filter(key => state.filters[key].status === true).map(key => (`${key}=${state.filters[key].value}`));
            if (f) {
                state.query = `?${f.join("&")}`;
            }
        },
        clearFilters: (state) => {
            state.filters = initialFilters;
            state.query = "";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadStandartFilms.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                standartFilmsAdapter.setAll(state, action.payload.data);
            })
            .addCase(loadStandartFilms.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createStandartFilm.fulfilled, (state, action) => {
                // standartFilmsAdapter.addOne(state, action.payload.data);
            })
            .addCase(updateStandartFilm.fulfilled, (state, action) => {
                standartFilmsAdapter.setOne(state, action.payload.data);
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
})

export const {
    setMarkFilter,
    setMarkFilterStatus,
    setColorFilter,
    setColorFilterStatus,
    setThicknessFilter,
    setThicknessFilterStatus,
    clearFilters,
    setSearch,
    setStandartTitleFilter,
    setStandartTitleFilterStatus} = standartFilmsSlice.actions;
export const standartFilmsReducer = standartFilmsSlice.reducer;
export const standartFilmsSelector = standartFilmsAdapter.getSelectors(state => state.standartFilms);

