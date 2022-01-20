import { getWeatherService } from '../../services';
import { setLoading, setData, setError } from '../actions';

export const getWeatherThunk = (city) => {
    
    return async (dispatch) => {
        dispatch(setLoading(true));
        const response = await getWeatherService(city);
        if(!response.error) {
            dispatch(setData(response));
            dispatch(setLoading(false));
            return;
        }
        dispatch(setLoading(false));
        dispatch(setError({
            success: false,
            message: 'Something went wrong!'
        }));
    }
}