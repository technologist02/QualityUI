import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    order: {
        id: 0,
        orderNumber : "",
        customer: "",
        productionDate: "",
        brigadeNumber: "",
        extruderName : "",
        filmMark: "",
        filmThick: "",
        filmColor: "",
        width: "",
        minThickness: "",
        maxThickness: "",
        tensileStrengthMD: "",
        tensileStrengthTD: "",
        elongationAtBreakMD: "",
        elongationAtBreakTD: "",
        coefficientOfFrictionS: "",
        coefficientOfFrictionD: "",
        lightTransmission: "",
        coronaTreatment: "",
        standartQualityNameID: ""
    }
}

const editFilmSlice = createSlice({
    name: '@@edit-film',
    initialState: initialState,
    reducers: {
        setOrderId: (state, action) => {
            state.order.id = action.payload
        },
        setOrderNumber: (state, action) => {
            state.order.id = action.payload
        },
        setFilmMark : (state, action) => {
            state.order.filmMark = action.payload
        },
        setFilmThick: (state, action) => {
            state.order.filmThick = action.payload
        },
        setFilmColor: (state, action) => {
            state.order.filmColor = action.payload
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
        setStandartQualityNameID: (state, action) => {
            state.order.standartQualityNameID = action.payload
        },
        // showFilmModal: (state, action) => {
        //     state.isModalShow = true;
        //     state.extruderName = action.payload
        // },
        resetModal: () => {
            return initialState
        }
    }
})

