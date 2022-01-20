const PREFIX = 'WEATHER_APP_';

export const WeatherApp = {
    SET_LOADING: `${PREFIX}SET_LOADING`,
    SET_DATA: `${PREFIX}SET_DATA`,
    SET_ERROR: `${PREFIX}SET_ERROR`
}

export const setLoading = payload => ({
    type: WeatherApp.SET_LOADING,
    payload
})

export const setData = payload => ({
    type: WeatherApp.SET_DATA,
    payload
})

export const setError = payload => ({
    type: WeatherApp.SET_ERROR,
    payload
})