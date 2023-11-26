import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const rolesAdapter = createEntityAdapter({
    selectId: (role) => role.roleId,
});

export const loadUsers = createAsyncThunk(
    '@@users-data/load-users',
    async (_, {
        extra: {client, api}
    }) => {
        return await client.get(api.USERS)
    }
)

export const loadRoles = createAsyncThunk(
    '@@users-data/load-role',
    async (_, {
        extra: {client, api}
    }) => {
        return await client.get(api.ROLES)
    }
)

export const createRoles = createAsyncThunk(
    '@@users-data/create-role',
    async (role, {
        extra: {client, api}
    }) => {
        return await client.post(api.ROLES, role)
    }
)

export const updateUserRoles = createAsyncThunk(
    '@@users-data/update-user-roles',
    async (user, {
        extra: {client, api}
    }) => {
        return await client.patch(api.USERS, user)
    }
)


const rolesSlice = createSlice({
    name: "@@users-data",
    initialState: rolesAdapter.getInitialState({
        loadingUsers: 'idle',
        loadingRoles: 'idle',
        error: null,
        users: []
    }),
    reducers: {
        setRole : (state, action) => {
            const index = state.users.findIndex(x => x.userId === action.payload.userId);
            const indexRole = state.users[index].roles.findIndex(x => x.roleId === action.payload.roleId);
            // console.log(indexRole)
            // console.log(state.users[index].roles[indexRole])
            state.users[index].roles[indexRole].status = !state.users[index].roles[indexRole].status
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadRoles.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                rolesAdapter.addMany(state, action.payload.data);
                state.roleIds = action.payload.data.map(r => r.roleId)
                state.loadingRoles = "fulfilled"
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload.data.map(user => {
                    const uRoles = user.roles.map(r => r.roleId);
                    const roles = state.roleIds.map(id => ({roleId: id, status: uRoles.includes(id)}))
                    return {...user, roles}
                })
                state.loadingUsers = "fulfilled"
            })
            .addCase(updateUserRoles.fulfilled, (state, action) => {
                console.log(action.payload.status)
                alert("Роли пользователя успешно изменены");
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                // alert(action.error.message);
                state.loading = 'rejected';
                state.error = action.error.message || action.payload;
            })
    }
})

export const {setRole} = rolesSlice.actions;
export const rolesReducer = rolesSlice.reducer;
export const rolesSelector = rolesAdapter.getSelectors(state => state.roles);