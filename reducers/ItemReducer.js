import * as types from '../contants'
const DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}
export default function variables  (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_ITEM_SUCCESS:
            return { 
                ...state, 
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.ADD_ITEM_SUCCESS:
            return {
                ...state,
                isFetching:false
            }

        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                isFetching:false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
            
        default:
            return state;
    }
}