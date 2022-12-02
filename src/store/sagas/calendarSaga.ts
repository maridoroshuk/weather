import {
  put,
  call,
  select,
  takeLatest,
  PutEffect,
  CallEffect,
  ForkEffect,
  SelectEffect,
} from '@redux-saga/core/effects';
import getEventsList from '@services/calendar/getEventsList';
import {
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
} from '@store/features/calendar/calendarSlice';

function* calendarSagaWorker(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
  > {
  try {
    const calendar = yield select(
      (state) => state.calendar.apiCalendar,
    );
    const events = yield call(getEventsList, calendar);
    yield put(getEventsSuccess({ events }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getEventsFailure(error.message));
    }
  }
}

function* watchCalendarSaga(): Generator<ForkEffect> {
  yield takeLatest(
    getEventsRequest.type,
    calendarSagaWorker,
  );
}

export default watchCalendarSaga;
