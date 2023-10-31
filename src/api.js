import { API_URL } from "./config";

export const ORDERS = API_URL + '/OrderQuality'
export const EXTRUDERS = API_URL + '/Extruders'
export const FILMS = API_URL + '/Films'
export const STANDART_FILMS = API_URL + '/StandartQualityFilms'
export const STANDART_TITLE = API_URL + '/StandartQualityNames'
export const USERS_AUTH = API_URL + '/Auth/login'
export const USERS_REGISTER = API_URL + '/Auth/register'
export const USERS_DATA = API_URL + '/Auth'

export const PASSPORT = ORDERS + '/passport'