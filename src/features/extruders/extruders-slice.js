import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const extrudersAdapter = createEntityAdapter({
    selectId: (extruder) => extruder.extruderId,
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
        return client.post(api.EXTRUDERS, extruder)
    }
)

export const updateExtruder = createAsyncThunk(
    '@@extruders/update-extruder',
    async (extruder, {
        extra: {client, api}
    }) => {
        return client.patch(api.EXTRUDERS, extruder)
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
                alert("Новый рабочий центр успешно добавлен")
                // extrudersAdapter.setOne(state, action.payload.data)
            })
            .addCase(createExtruder.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.meta.error
            })
            .addCase(updateExtruder.fulfilled, (state, action) => {
                alert("Данные успешно обновлены")
                extrudersAdapter.setOne(state, action.payload.data)
            })
            .addCase(updateExtruder.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.meta.error
            })
    }
})

export const extrudersReducer = extrudersSlice.reducer;
export const extrudersSelector = extrudersAdapter.getSelectors(state => state.extruders);