import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    mode: "",
    extruder: {
        id: 0,
        extruderName: ""
    }
}

const editExtruderSlice = createSlice({
    name: '@@edit-extruder',
    initialState: initialState,
    reducers: {
        setExtruderId: (state, action) => {
            state.extruder.id = action.payload;
        },
        setExtruderName : (state, action) => {
            state.extruder.extruderName = action.payload;
        },
        addExtruder: (state) => {
            state.isModalShow = true;
            state.mode = "Добавить рабочий центр";
        },
        changeExtruder: (state, action) => {
            state.isModalShow = true;
            state.mode = `Изменить рабочий центр ${action.payload.extruderName}`;
            state.extruder = action.payload;
        },
        resetExtruder: () => {
            return initialState;
        }
    }
})

export const {setExtruderId, setExtruderName, addExtruder, changeExtruder, resetExtruder} = editExtruderSlice.actions;
export const editExtruderReducer = editExtruderSlice.reducer;