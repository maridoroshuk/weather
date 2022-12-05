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
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from '@store/features/weatherSlice';
import getWeatherBitAPI from '@services/weather/getWeatherBitAPI';
import { APIOptions } from '@customTypes/weather';

function* openWeatherSagaWorker({
  payload,
}: ReturnType<typeof getWeatherRequest>): Generator<
  CallEffect | PutEffect | SelectEffect,
  void
> {
  try {
    const api = yield select((state) => state.weather.api);
    const current = yield call(
      api === APIOptions.OPENWEATHER
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
    openWeatherSagaWorker,
  );
}

export default watchWeatherSaga;
