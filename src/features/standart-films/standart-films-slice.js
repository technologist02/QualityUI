import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const standartFilmsAdapter = createEntityAdapter({
    selectId: (standart) => standart.standartQualityFilmId,
});

export const loadStandartFilms = createAsyncThunk(
    '@@standart-films/load-standart-films',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.STANDART_FILMS)
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
        error: null
    }),
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(loadStandartFilms.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                standartFilmsAdapter.addMany(state, action.payload.data);
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

export const standartFilmsReducer = standartFilmsSlice.reducer;
export const standartFilmsSelector = standartFilmsAdapter.getSelectors(state => state.standartFilms);

