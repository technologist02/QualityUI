import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const filmsAdapter = createEntityAdapter({
    selectId: (film) => film.filmId,
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
}

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
export const searchFilms = createAsyncThunk(
    '@@orders/search-films',
    async (query, {
        extra: {client, api}
    }) => {
        return client.get(api.SEARCH_FILMS+query)
    }
)

const filmsSlice = createSlice({
    name: '@@films',
    initialState: filmsAdapter.getInitialState({
        filters: initialFilters,
        query: "",
        loading: 'idle',
        error: null,
    }),
    reducers : {
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
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                filmsAdapter.setAll(state, action.payload.data);
            })
            .addCase(loadFilms.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(searchFilms.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(searchFilms.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                console.log(action.payload)
                filmsAdapter.setAll(state, action.payload.data);
            })
            .addCase(createFilm.fulfilled, (state, action) => {
                alert("Пленка успешно добавлена")
                //filmsAdapter.addOne(state, action.payload.data)
            })
            .addCase(updateFilm.fulfilled, (state, action) => {
                alert("Данные пленки обновлены")
                filmsAdapter.setOne(state, action.payload.data) 
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.loading = 'rejected';
                state.error = action.error.message || action.payload;
            })
    }
})

export const {setMarkFilter, setMarkFilterStatus, setColorFilter, setColorFilterStatus, setThicknessFilter, setThicknessFilterStatus, clearFilters, setSearch} = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
export const filmsSelector = filmsAdapter.getSelectors(state => state.films);