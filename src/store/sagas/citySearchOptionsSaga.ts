import {
  put,
  call,
  takeLatest,
  PutEffect,
  CallEffect,
  ForkEffect,
} from '@redux-saga/core/effects';
import getCitySearchOptions from '@services/cities/getCitySearchOptions';
import {
  citiesOptionsFailure,
  citiesOptionsRequest,
  citiesOptionsSuccess,
} from '@store/features/citySearchOptionsSlice';

function* citySearchSagaWorker({
  payload,
}: ReturnType<typeof citiesOptionsRequest>): Generator<
  CallEffect | PutEffect,
  void
> {
  try {
    const result = yield call(getCitySearchOptions, payload?.query);
    yield put(citiesOptionsSuccess(result));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(citiesOptionsFailure(error.message));
    }
  }
}

function* watchCitySearchSaga(): Generator<ForkEffect> {
  yield takeLatest(
    citiesOptionsRequest.type,
    citySearchSagaWorker,
  );
}

export default watchCitySearchSaga;
