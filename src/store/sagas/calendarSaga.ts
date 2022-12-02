import {
  put,
  call,
  takeLatest,
  PutEffect,
  CallEffect,
  ForkEffect,
} from '@redux-saga/core/effects';
import getEventsList from '@services/calendar/getEventsList';
import { getEventsFailure, getEventsRequest, getEventsSuccess } from '@store/features/calendar/calendarSlice';

function* calendarSagaWorker(): Generator<CallEffect | PutEffect, void> {
  try {
    const events = yield call(getEventsList);
    yield put(getEventsSuccess({ events }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getEventsFailure(error.message));
    }
  }
}

function* watchCalendarSaga(): Generator<ForkEffect> {
  yield takeLatest(getEventsRequest.type, calendarSagaWorker);
}

export default watchCalendarSaga;
