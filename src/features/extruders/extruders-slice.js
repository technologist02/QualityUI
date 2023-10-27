import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const extrudersAdapter = createEntityAdapter({
    selectId: (extruder) => extruder.id,
});

export const loadExtruders = createAsyncThunk(
    '@@extruders/load-extruders',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.EXTRUDERS)
    }
)

export const createExtruder = createAsyncThunk(
    '@@extruders/create-extruder',
    async (extruder, {
        extra: {client, api}
    }) => {
        const newExtruder = {extruderName: extruder}
        return client.post(api.EXTRUDERS, newExtruder)
    }
)

const extrudersSlice = createSlice({
    name: '@@extruders',
    initialState: extrudersAdapter.getInitialState({
        loading: 'idle',
        error: null
      }),
    reducers : {},
    extraReducers: builder => {
        builder
            .addCase(loadExtruders.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                extrudersAdapter.addMany(state, action.payload.data);
            })
            .addCase(loadExtruders.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(loadExtruders.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.meta.error
            })
            .addCase(createExtruder.fulfilled, (state, action) => {
                extrudersAdapter.setOne(state, action.payload.data)
            })
            .addCase(createExtruder.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.meta.error
            })
    }
})

export const extrudersReducer = extrudersSlice.reducer;
export const extrudersSelector = extrudersAdapter.getSelectors(state => state.extruders);