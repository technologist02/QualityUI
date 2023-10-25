import { API_URL } from "./config";

export const apiOrders = API_URL + '/OrderQuality'
export const apiFilms = API_URL + '/Films'
export const apiStandartFilms = API_URL + '/StandartQualityFilms'
export const apiStandartTitle = API_URL + '/StandartQualityNames'
export const apiUsers = API_URL + '/Auth'

export const apiPassport = apiOrders + '/passport'