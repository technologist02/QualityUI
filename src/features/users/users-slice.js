import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    isUserAuth: false,
    user: "",
}

export const loadUserData = createAsyncThunk(
    "@@users/load-user-data",
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.USERS_DATA)
    }
)

export const authorizeUser = createAsyncThunk(
    "@@users/autorize-user",
    async (user, {
        dispatch,
        extra: {client, api}
    }) => {
        const response = await client.post(api.USERS_AUTH, user);
        console.log(response)
        if (response.status === 201){
            const token = response.data;
            sessionStorage.setItem("tokenKey", token);
            dispatch(loadUserData())
        }
        else {
            window.location.href = "/Autorization"
        }
    }
)

export const registryUser = createAsyncThunk(
    "@@users/registry-user",
    async (user, {
        extra: {client, api}
    }) => {
        return client.post(api.USERS_REGISTER, user)
    }
)

const userSlice = createSlice({
    name: "@@users",
    initialState: initialState,
    reducers: {
        Logout: (state, action) => {
            sessionStorage.removeItem("tokenKey");
            return initialState
        }
    },
    extraReducers: builder => {
        builder
            // .addCase(registryUser.fulfilled, (state, action) => {

            // })
            // .addCase(authorizeUser.fulfilled, (state, action) => {
            //     console.log(action)
            //     state.isUserAuth = true;
            // })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.isUserAuth = true;
                state.user = action.payload.data
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                alert(action.error.message);
                state.loading = 'rejected';
                state.error = action.error.message ||action.payload;
            })
    }
})

export const {Logout} = userSlice.actions;
export const userReducer = userSlice.reducer;
