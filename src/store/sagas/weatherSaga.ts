import {
  put,
  call,
  takeLatest,
  CallEffect,
  PutEffect,
  ForkEffect,
} from '@redux-saga/core/effects';
import getCurrentWeather from '@services/weather/getCurrentWeather';
import getForecast from '@services/weather/getForecast';
import {
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from '@store/features/weather/weatherSlice';

function* weatherSagaWorker({
  payload,
}: ReturnType<
  typeof getWeatherRequest
>): Generator<CallEffect | PutEffect, void> {
  try {
    const current = yield call(
      getCurrentWeather,
      payload?.search?.lat,
      payload?.search?.lon,
    );
    const forecast = yield call(
      getForecast,
      payload?.search?.lat,
      payload?.search?.lon,
    );
    yield put(getWeatherSuccess({ current, forecast }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getWeatherFailure(error.message));
    }
  }
}

function* watchWeatherSaga(): Generator<ForkEffect> {
  yield takeLatest(
    getWeatherRequest.type,
    weatherSagaWorker,
  );
}

export default watchWeatherSaga;
