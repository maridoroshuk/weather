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
import getEventsList from '@store/api/calendar/getEventsList';
import {
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
} from '@store/features/calendarSlice';

function* successSaga(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  any
  > {
  const calendar = yield select(
    (state) => state.calendar.apiCalendar,
  );
  const events = yield call(getEventsList, calendar);
  yield put(getEventsSuccess({ events }));
}

function* errorSaga(error: unknown) {
  if (error instanceof Error) {
    yield put(getEventsFailure(error.message));
  }
}

export function* calendarSagaWorker() {
  try {
    yield successSaga();
  } catch (error: unknown) {
    yield errorSaga(error);
  }
}

function* watchCalendarSaga(): Generator<ForkEffect> {
  yield takeLatest(
    getEventsRequest.type,
    calendarSagaWorker,
  );
}

export default watchCalendarSaga;
