import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    isUserAuth: false,
    login: "",
    userData: {
        "id": 0,
        "login": "",
        "name": "",
        "surname": "",
        "email": "",
        "roles": [],
        "created": ""
    },
    loading: "idle",
    token : "",
}

export const loadUserData = createAsyncThunk(
    "@@user/load-user-data",
    async (_, {
        extra: {client, api}
    }) => {
        return client.get(api.USERS_DATA)
    }
)

export const authorizeUser = createAsyncThunk(
    "@@user/autorize-user",
    async (user, {
        dispatch,
        extra: {client, api}
    }) => {
        const response = await client.post(api.USERS_AUTH, user);
        console.log(response)
        if (response.status === 201){
            const token = response.data;
            sessionStorage.setItem("tokenKey", token);
            dispatch(loadUserData());
            return token;
        }
        else {
            window.location.href = "/Autorization"
        }
    }
)

export const registryUser = createAsyncThunk(
    "@@user/registry-user",
    async (data, {
        dispatch,
        extra: {client, api}
    }) => {
        const response =  await client.post(api.USERS_REGISTER, data);
        console.log(response)
        if (response.status === 201){
            dispatch(authorizeUser({login: data.login, password: data.password}))
        }
    }
)

export const updateUserData = createAsyncThunk(
    "@@user/update-user",
    async (user, {
        extra: {client, api}
    }) => {
        return client.patch(api.USERS_DATA, user)
    }
)

const userSlice = createSlice({
    name: "@@user",
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
            .addCase(authorizeUser.fulfilled, (state, action) => {
                state.token = action.payload;
            })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.isUserAuth = true;
                state.login =  action.payload.data.login;
                state.userData = action.payload.data;
                state.loading = "fulfilled"
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                // alert(action.error.message);
                //state.loading = 'rejected';
                state.error = action.error.message || action.payload;
            })
    }
})

export const {Logout} = userSlice.actions;
export const userReducer = userSlice.reducer;
