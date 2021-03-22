import * as types from '../contants'
export function getListItem(payload) {
    return {
        type: types.GET_ITEM_REQUEST,
        payload
    }
}

export function addNewItem(payload) {
    return {
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}