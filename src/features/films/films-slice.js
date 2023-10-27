import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const filmsAdapter = createEntityAdapter({
    selectId: (film) => film.id,
});

export const loadFilms = createAsyncThunk(
    '@@films/load-films',
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.FILMS)
    }
)

export const createFilm = createAsyncThunk(
    '@@films/create-film',
    async (film, {
        extra: {client, api}
    }) => {
        return client.post(api.FILMS, film)
    }
)

export const updateFilm = createAsyncThunk(
    '@@films/update-film',
    async (film, {
        extra: {client, api}
    }) => {
        return client.patch(api.FILMS, film)
    }
)

const filmsSlice = createSlice({
    name: '@@films',
    initialState: filmsAdapter.getInitialState({
        loading: 'idle',
        error: null
    }),
    reducers : {},
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                filmsAdapter.addMany(state, action.payload.data);
            })
            .addCase(loadFilms.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createFilm.fulfilled, (state, action) => {
                filmsAdapter.addOne(state, action.payload.data)
            })
            .addCase(updateFilm.fulfilled, (state, action) => {
                filmsAdapter.setOne(state, action.payload.data) 
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || action.error.message;
            })
    }
})

export const filmsReducer = filmsSlice.reducer;
export const filmsSelector = filmsAdapter.getSelectors(state => state.films);