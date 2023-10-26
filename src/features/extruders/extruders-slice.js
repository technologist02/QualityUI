import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const extrudersAdapter = createEntityAdapter({
    selectId: (extruder) => extruder.id,
});

export const loadExtruders = createAsyncThunk(
    '@@films/load-extruders',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.EXTRUDERS)
    }
)

export const createExtruder = createAsyncThunk({

})

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
                loadExtruders.addMany(state, action.payload.data);
            })
            .addCase(loadExtruders.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(loadExtruders.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.meta.error
            })
    }
})

export const extrudersReducer = extrudersSlice.reducer;
export const extrudersSelector = loadExtruders.getSelectors(state => state.extruders);