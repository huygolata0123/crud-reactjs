import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
 import addNewItem from '../fetchAPI/addItems'
import * as types from '../contants'

function* getListItem(action) {
    try {
        const res = yield getItems(action.payload);
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addItem(action) {
     const res = yield addNewItem(action.payload)
    try {
     
        yield put ({
            type: types.ADD_ITEM_SUCCESS,
             payload:res
        })
    }catch (error) {
        yield put ({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST,addItem)
]  
