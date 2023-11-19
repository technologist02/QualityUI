import { API_URL } from "./config";

export const ORDERS = API_URL + '/OrderQuality'
export const SEARCH_ORDERS = API_URL + '/OrderQuality/search'
export const EXTRUDERS = API_URL + '/Extruders'
export const FILMS = API_URL + '/Films'
export const STANDART_FILMS = API_URL + '/StandartQualityFilms'
export const STANDART_TITLE = API_URL + '/StandartQualityTitles'
export const USERS_AUTH = API_URL + '/Authorization/login'
export const USERS_REGISTER = API_URL + '/Authorization/register'
export const USERS_DATA = API_URL + '/Authorization'

export const PASSPORT = ORDERS + '/passport'

export const USERS = API_URL + '/Users'
export const ROLES = API_URL + '/Users/roles'