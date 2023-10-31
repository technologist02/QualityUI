import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    isUserAuth: false,
    user: {},
}

// export const loadUserData = createAsyncThunk(
//     "@@users/load-user-data",
//     async (token="", {
//         extra: {client, api}
//     }) => {
//         return client.get(api.USERS_DATA, token)
//     }
// )

export const authorizeUser = createAsyncThunk(
    "@@users/autorize-user",
    async (user, {
        extra: {client, api}
    }) => {
        const token = await client.post(api.USERS_AUTH, user).data
        sessionStorage.setItem("tokenKey", token);
        return client.get(api.USERS_DATA, token)
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
            state.isUserAuth = false;
            sessionStorage.removeItem("tokenKey");
            return initialState
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registryUser.fulfilled, (state, action) => {

            })
            .addCase(authorizeUser.fulfilled, (state, action) => {
                console.log(action)
                state.isUserAuth = true;
                state.user = action.payload.data
                
            })
            // .addCase(loadUserData.fulfilled, (state, action) => {
            //     state.isUserAuth = true;
            //     state.user = action.payload.data
            // })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                alert(action.error.message);
                state.loading = 'rejected';
                state.error = action.error.message ||action.payload;
            })
    }
})

export const userReducer = userSlice.reducer;
