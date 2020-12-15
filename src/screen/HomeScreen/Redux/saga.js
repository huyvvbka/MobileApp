import {put, takeLatest, all, call, takeEvery} from 'redux-saga/effects';
import constants from './constants';
function* updateInfo(action) {
  console.log('action: ', JSON.stringify(action));
}

export default function* InfoSaga() {
  yield all([yield takeLatest(constants.dispatchType.UPDATE_INFO, updateInfo)]);
}
