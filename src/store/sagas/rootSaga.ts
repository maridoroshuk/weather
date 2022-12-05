import {
  all,
  AllEffect,
  fork,
  ForkEffect,
} from 'redux-saga/effects';
import watchCalendarSaga from './calendarSaga';
import watchCitySearchSaga from './citySearchOptionsSaga';
import watchWeatherSaga from './weatherSaga';

function* rootSaga(): Generator<
  AllEffect<ForkEffect>,
  void
  > {
  yield all([
    fork(watchCitySearchSaga),
    fork(watchWeatherSaga),
    fork(watchCalendarSaga),
  ]);
}

export default rootSaga;
