import {all} from 'redux-saga/effects';
import InfoSaga from '../screen/HomeScreen/Redux/saga';

export default function* rootSaga() {
  yield all([InfoSaga()]);
}
