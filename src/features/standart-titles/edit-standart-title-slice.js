import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    mode: "",
    standart: {
        id: 0,
        name: "",
        description: ""
    }
}

const editStandartTitleSlice = createSlice({
    name: '@@edit-standart-title',
    initialState: initialState,
    reducers: {
        setStandartTitleId: (state, action) => {
            state.standart.id = action.payload;
        },
        setStandartTitleName : (state, action) => {
            state.standart.name = action.payload;
        },
        setStandartTitleDescription : (state, action) => {
            state.standart.description = action.payload;
        },
        addStandartTitle: (state) => {
            state.isModalShow = true;
            state.mode = "Добавить стандарт качества";
            state.standart = initialState.standart;
        },
        changeStandartTitle: (state, action) => {
            state.isModalShow = true;
            state.mode = `Изменить стандарт качества ${action.payload.name}`;
            state.standart = action.payload;
        },
        resetEditStandartTitle: () => {
            return initialState;
        }
    }
})

export const {setStandartTitleId, setStandartTitleName, setStandartTitleDescription, addStandartTitle, changeStandartTitle, resetEditStandartTitle} = editStandartTitleSlice.actions;
export const editStandartTitleReducer = editStandartTitleSlice.reducer;