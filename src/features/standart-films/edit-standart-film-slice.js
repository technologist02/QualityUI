import { createSlice } from "@reduxjs/toolkit";
import { filmsParse } from "../../Entities/film";
import { loadFilms } from "../films/films-slice";

const initialState = {
    isModalShow: false,
    mode:"",
    standartFilm: {
        id: 0,
        filmMark: "",
        filmThick: 0,
        filmColor: "",
        thicknessVariation: 0,
        tensileStrengthMD: 0,
        tensileStrengthTD: 0,
        elongationAtBreakMD: 0,
        elongationAtBreakTD: 0,
        coefficientOfFrictionS: 0,
        coefficientOfFrictionD: 0,
        lightTransmission: 0,
        coronaTreatment: 0,
        standartTitle: ""
    },
    filmsData : {
        marks: [],
        thicks: [],
        colors: []
    },
    films: [],
}

const editStandartFilmSlice = createSlice({
    name: "@@edit-standart-film",
    initialState: initialState,
    reducers: {
        setStandartFilmId: (state, action) => {
            state.standartFilm.id = action.payload
        },
        setThicknessVariation: (state, action) => {
            state.standartFilm.thicknessVariation = action.payload
        },
        setTensileStrengthMD: (state, action) => {
            state.standartFilm.tensileStrengthMD = action.payload
        },
        setTensileStrengthTD: (state, action) => {
            state.standartFilm.tensileStrengthTD = action.payload
        },
        setElongationAtBreakMD: (state, action) => {
            state.standartFilm.elongationAtBreakMD = action.payload
        },
        setElongationAtBreakTD: (state, action) => {
            state.standartFilm.elongationAtBreakTD = action.payload
        },
        setCoefficientOfFrictionS: (state, action) => {
            state.standartFilm.coefficientOfFrictionS = action.payload
        },
        setCoefficientOfFrictionD: (state, action) => {
            state.standartFilm.coefficientOfFrictionD = action.payload
        },
        setLightTransmission: (state, action) => {
            state.standartFilm.lightTransmission = action.payload
        },
        setCoronaTreatment: (state, action) => {
            state.standartFilm.coronaTreatment = action.payload
        },
        setStandartTitle: (state, action) => {
            state.standartFilm.standartTitle = action.payload
        },
        addStandartFilm: (state, action) => {
            state.isModalShow = true;
            state.mode = "Добавить стандарт качества пленки";
        },
        changeStandartFilm: (state, action) => {
            state.standartFilm = action.payload
            state.filmsData.thicks = filmsParse(state.films
                .filter(film => film.mark === action.payload.filmMark)).thicks;
            state.standartFilm.filmThick = action.payload.filmThick;
            state.filmsData.colors = filmsParse(state.films
                .filter(film => film.mark === action.payload.filmMark && film.thickness === +state.standartFilm.filmThick)).colors;
            state.standartFilm.filmThick = +action.payload.filmThick;
            state.isModalShow = true;
            state.mode = `Изменить ${action.payload.standartTitle} \n марки ${action.payload.filmMark} ${action.payload.filmThick} ${action.payload.filmColor}`;
        },
        chooseMark: (state, action) => {
            state.standartFilm.filmMark = action.payload;
            state.standartFilm.filmThick = "";
            state.standartFilm.filmColor = "";
            state.filmsData.thicks = filmsParse(state.films
                .filter(film => film.mark === action.payload)).thicks;
        },
        chooseThickness: (state, action) => {
            state.standartFilm.filmThick = action.payload;
            state.standartFilm.filmColor = "";
            state.filmsData.colors = filmsParse(state.films
                .filter(film => film.mark === state.standartFilm.filmMark && film.thickness === +action.payload)).colors;
        },
        chooseColor: (state, action) => {
            state.standartFilm.filmColor = action.payload
        },
        resetStandartFilm: (state,action) => {
            state.isModalShow = false;
            state.standartFilm = initialState.standartFilm;
            
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.films = action.payload.data;
                state.filmsData.marks = filmsParse(action.payload.data).marks;
            })
    }

})

export const { setStandartFilmId,
    setThicknessVariation,
    setTensileStrengthMD,
    setTensileStrengthTD,
    setElongationAtBreakMD,
    setElongationAtBreakTD,
    setCoefficientOfFrictionS,
    setCoefficientOfFrictionD,
    setLightTransmission,
    setCoronaTreatment,
    setStandartTitle,
    addStandartFilm,
    changeStandartFilm,
    resetStandartFilm,
    chooseMark,
    chooseThickness,
    chooseColor,
} = editStandartFilmSlice.actions
export const editStandartFilmReducer = editStandartFilmSlice.reducer