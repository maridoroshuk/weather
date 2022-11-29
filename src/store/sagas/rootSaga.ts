import { all, fork } from 'redux-saga/effects';
import watchWeatherSaga from './weatherSaga';

function* rootSaga() {
  yield all([fork(watchWeatherSaga)]);
}

export default rootSaga;
