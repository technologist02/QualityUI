import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const standartTitlesAdapter = createEntityAdapter({
    selectId: (title) => title.id,
});

export const loadStandartTitles = createAsyncThunk(
    '@@standart-titles/load-standart-titles',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.STANDART_TITLE)
    }
)

export const createStandartTitle = createAsyncThunk(
    '@@standart-titles/create-standart-title',
    async (standart, {
        extra: {client, api}
    }) => {
        return client.post(api.STANDART_TITLE, standart)
    }
)

export const updateStandartTitle = createAsyncThunk(
    '@@standart-titles/update-standart-title',
    async (standart, {
        extra: {client, api}
    }) => {
        return client.patch(api.STANDART_FILMS, standart)
    }
)

const standartTitlesSlice = createSlice({
    name: '@@standart-titles',
    initialState: standartTitlesAdapter.getInitialState({
        loading: 'idle',
        error: null
    }),
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(loadStandartTitles.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                standartTitlesAdapter.addMany(state, action.payload.data);
            })
            .addCase(loadStandartTitles.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createStandartTitle.fulfilled, (state, action) => {
                standartTitlesAdapter.addOne(state, action.payload.data);
            })
            .addCase(updateStandartTitle.fulfilled, (state, action) => {
                standartTitlesAdapter.setOne(state, action.payload.data);
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
})

export const standartTitlesReducer = standartTitlesSlice.reducer;
export const standartTitlesSelector = standartTitlesAdapter.getSelectors(state => state.standartTitles);
