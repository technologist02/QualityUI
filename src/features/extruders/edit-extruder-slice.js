import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    mode: "",
    extruder: {
        extruderId: 0,
        name: ""
    }
}

const editExtruderSlice = createSlice({
    name: '@@edit-extruder',
    initialState: initialState,
    reducers: {
        setExtruderId: (state, action) => {
            state.extruder.extruderId = action.payload;
        },
        setExtruderName : (state, action) => {
            state.extruder.name = action.payload;
        },
        addExtruder: (state) => {
            state.isModalShow = true;
            state.mode = "Добавить рабочий центр";
        },
        changeExtruder: (state, action) => {
            state.isModalShow = true;
            state.mode = `Изменить рабочий центр ${action.payload.name}`;
            state.extruder = action.payload;
        },
        resetExtruder: () => {
            return initialState;
        }
    }
})

export const {setExtruderId, setExtruderName, addExtruder, changeExtruder, resetExtruder} = editExtruderSlice.actions;
export const editExtruderReducer = editExtruderSlice.reducer;