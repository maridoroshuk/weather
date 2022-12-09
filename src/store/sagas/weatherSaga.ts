import {
  put,
  call,
  takeLatest,
  CallEffect,
  PutEffect,
  ForkEffect,
  select,
  SelectEffect,
} from '@redux-saga/core/effects';
import {
  weatherDailyFailure,
  weatherDailySuccess,
  weatherHourlySuccess,
  weatherRequest,
} from '@store/features/weatherSlice';
import { APIOptions } from '@customTypes/weather';
import getWeatherOpenWeatherAPI from '@store/api/weather/getWeatherOpenWeatherAPI';
import getWeatherBitAPI from '@store/api/weather/getWeatherBitAPI';
import getOpenWeatherForecast from '@store/api/weather/getOpenWeatherForecast';

function* successSaga(
  lat: number,
  lon: number,
): Generator<CallEffect | PutEffect | SelectEffect, void> {
  const api = yield select((state) => state.weather.api);
  const isDailyRequest = api === APIOptions.OPENWEATHER;
  const current = yield call(
    isDailyRequest
      ? getWeatherOpenWeatherAPI
      : getWeatherBitAPI,
    lat,
    lon,
  );
  const forecast = yield call(
    getOpenWeatherForecast,
    lat,
    lon,
  );

  if (isDailyRequest) {
    yield put(weatherDailySuccess({ current, forecast }));
  } else {
    yield put(weatherHourlySuccess({ current }));
  }
}

function* errorSaga(error: unknown) {
  if (error instanceof Error) {
    yield put(weatherDailyFailure(error.message));
  }
}

function* weatherSagaWorker({
  payload,
}: ReturnType<typeof weatherRequest>) {
  try {
    yield successSaga(payload?.search?.lat, payload?.search?.lon);
  } catch (error: unknown) {
    yield errorSaga(error);
  }
}

function* watchWeatherSaga(): Generator<ForkEffect> {
  yield takeLatest(weatherRequest.type, weatherSagaWorker);
}

export default watchWeatherSaga;
