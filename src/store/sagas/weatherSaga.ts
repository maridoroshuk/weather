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
import getWeatherOpenWeatherAPI from '@services/weather/getWeatherOpenWeatherAPI';
import getOpenWeatherForecast from '@services/weather/getOpenWeatherForecast';
import {
  weatherDailyFailure,
  weatherDailySuccess,
  weatherHourlySuccess,
  weatherRequest,
} from '@store/features/weatherSlice';
import { APIOptions } from '@customTypes/weather';
import getWeatherBitAPI from '@services/weather/getWeatherBitAPI';

function* weatherSagaWorker({
  payload,
}: ReturnType<typeof weatherRequest>): Generator<
  CallEffect | PutEffect | SelectEffect,
  void
> {
  try {
    const api = yield select((state) => state.weather.api);
    const isDailyRequest = api === APIOptions.OPENWEATHER;
    const current = yield call(
      isDailyRequest
        ? getWeatherOpenWeatherAPI
        : getWeatherBitAPI,
      payload?.search?.lat,
      payload?.search?.lon,
    );
    const forecast = yield call(
      getOpenWeatherForecast,
      payload?.search?.lat,
      payload?.search?.lon,
    );

    if (isDailyRequest) {
      yield put(weatherDailySuccess({ current, forecast }));
    } else {
      console.log(current);
      yield put(weatherHourlySuccess({ current }));
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(weatherDailyFailure(error.message));
    }
  }
}

function* watchWeatherSaga(): Generator<ForkEffect> {
  yield takeLatest(weatherRequest.type, weatherSagaWorker);
}

export default watchWeatherSaga;
