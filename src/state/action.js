
// action types
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

// action creator
export default function fetchDataSuccess(data) {
    return {
    type: FETCH_DATA_SUCCESS,
    data
    };
}

// export default fetchDataSuccess;
// export {FETCH_DATA_SUCCESS};