import { createSlice } from "@reduxjs/toolkit";
import { filmsParse } from "../../Entities/film";
import { loadFilms } from "../films/films-slice";
import { loadExtruders } from "../extruders/extruders-slice";

const initialState = {
    isModalShow: false,
    order: {
        id: 0,
        orderNumber : null,
        customer: null,
        productionDate: null,
        brigadeNumber: null,
        extruderName : null,
        filmMark: null,
        filmThick: null,
        filmColor: null,
        width: null,
        minThickness: null,
        maxThickness: null,
        tensileStrengthMD: null,
        tensileStrengthTD: null,
        elongationAtBreakMD: null,
        elongationAtBreakTD: null,
        coefficientOfFrictionS: null,
        coefficientOfFrictionD: null,
        lightTransmission: null,
        coronaTreatment: null,
        standartTitle: null
    },
    filmsData : {
        marks: [],
        thicks: [],
        colors: []
    },
    currentFilmsValues : {
        mark: "",
        thick: "",
        color: ""
    },
    films: [],
    extruders: []
}

const editOrderSlice = createSlice({
    name: '@@edit-order',
    initialState: initialState,
    reducers: {
        setOrderId: (state, action) => {
            state.order.id = action.payload
        },
        setOrderNumber: (state, action) => {
            state.order.orderNumber = action.payload
        },
        setCustomer: (state, action) => {
            state.order.customer = action.payload
        },
        setProductionDate: (state, action) => {
            state.order.productionDate = action.payload
        },
        setBrigadeNumber: (state, action) => {
            state.order.brigadeNumber = action.payload
        },
        setExtruderName: (state, action) => {
            state.order.extruderName = action.payload
        },
        setWidth: (state, action) => {
            state.order.width = action.payload
        },
        setMinThickness: (state, action) => {
            state.order.minThickness = action.payload
        },
        setMaxThickness: (state, action) => {
            state.order.maxThickness = action.payload
        },
        setTensileStrengthMD: (state, action) => {
            state.order.tensileStrengthMD = action.payload
        },
        setTensileStrengthTD: (state, action) => {
            state.order.tensileStrengthTD = action.payload
        },
        setElongationAtBreakMD: (state, action) => {
            state.order.elongationAtBreakMD = action.payload
        },
        setElongationAtBreakTD: (state, action) => {
            state.order.elongationAtBreakTD = action.payload
        },
        setCoefficientOfFrictionS: (state, action) => {
            state.order.coefficientOfFrictionS = action.payload
        },
        setCoefficientOfFrictionD: (state, action) => {
            state.order.coefficientOfFrictionD = action.payload
        },
        setLightTransmission: (state, action) => {
            state.order.lightTransmission = action.payload
        },
        setCoronaTreatment: (state, action) => {
            state.order.coronaTreatment = action.payload
        },
        setStandartTitle: (state, action) => {
            state.order.standartTitle = action.payload
        },
        setOrderModal: (state, action) => {
            //state.isModalShow = true;
            state.order = action.payload
            state.filmsData.thicks = filmsParse(state.films
                .filter(film => film.mark === action.payload.filmMark)).thicks;
            state.order.filmThick = action.payload.filmThick;
            state.filmsData.colors = filmsParse(state.films
                .filter(film => film.mark === action.payload.filmMark && film.thickness === +state.order.filmThick)).colors;
            state.order.filmThick = +action.payload.filmThick;
        },
        chooseMark: (state, action) => {
            state.order.filmMark = action.payload;
            state.order.filmThick = "";
            state.order.filmColor = "";
            state.filmsData.thicks = filmsParse(state.films
                .filter(film => film.mark === action.payload)).thicks;
            // if (state.filmsData.thicks) {
            //     state.order.filmThick = state.filmsData.thicks[0];
            // }
        },
        chooseThickness: (state, action) => {
            state.order.filmThick = action.payload;
            state.order.filmColor = "";
            state.filmsData.colors = filmsParse(state.films
                .filter(film => film.mark === state.order.filmMark && film.thickness === +action.payload)).colors;
            // if(state.filmsData.colors) {
            //     state.order.filmColor = state.filmsData.colors[0];
            // } 
        },
        chooseColor: (state, action) => {
            state.order.filmColor = action.payload
        },
        resetModal: (state,action) => {
            state.order = {}
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.films = action.payload.data;
                state.filmsData.marks = filmsParse(action.payload.data).marks;
                // if (state.filmsData.marks) {
                //     state.order.filmMark = state.filmsData.marks[0]
                // }
            })
            .addCase(loadExtruders.fulfilled, (state, action) => {
                state.extruders = action.payload.data.map(extruder => extruder.extruderName);
            })
    }
})

export const { setOrderId,
    setOrderNumber,
    setCustomer,
    setProductionDate,
    setBrigadeNumber,
    setExtruderName,
    setWidth,
    setMinThickness,
    setMaxThickness,
    setTensileStrengthMD,
    setTensileStrengthTD,
    setElongationAtBreakMD,
    setElongationAtBreakTD,
    setCoefficientOfFrictionS,
    setCoefficientOfFrictionD,
    setLightTransmission,
    setCoronaTreatment,
    setStandartTitle,
    setOrderModal,
    resetModal,
    chooseMark,
    chooseThickness,
    chooseColor } = editOrderSlice.actions;

export const editOrderReducer = editOrderSlice.reducer;