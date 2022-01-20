import { WeatherApp } from "../actions";

const initialState = {
    loading: false,
    data: null,
    error: null
};

export const weatherReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case WeatherApp.SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        case WeatherApp.SET_DATA:
            return {
                ...state,
                data: payload
            };
        case WeatherApp.SET_ERROR:
            return {
                ...state,
                error: payload
            };
        default: return state;
    }
};
