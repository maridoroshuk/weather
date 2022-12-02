import {
  all,
  AllEffect,
  fork,
  ForkEffect,
} from 'redux-saga/effects';
import watchCalendarSaga from './calendarSaga';
import watchWeatherSaga from './weatherSaga';

function* rootSaga(): Generator<
  AllEffect<ForkEffect>,
  void
  > {
  yield all([
    fork(watchWeatherSaga),
    fork(watchCalendarSaga),
  ]);
}

export default rootSaga;
