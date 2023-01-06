
import { FETCH_DATA_SUCCESS } from "./action";

// reducer
function dataReducer(state = {}, action) {
    switch (action.type) {
    case FETCH_DATA_SUCCESS:
        return {
        ...state,
        data: action.payload
        };
    default:
        return state;
    }
}

export default dataReducer ;