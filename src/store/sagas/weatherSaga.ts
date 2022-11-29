import {
  put,
  call,
  takeLatest,
} from '@redux-saga/core/effects';
import getCurrentWeather from '@services/weather/current';
import getForecast from '@services/weather/forecast';
import {
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from '@store/features/weather/weatherSlice';

interface IOpenWeatherResponse {}
interface IWatcherSaga {}

function* weatherSagaWorker({
  payload,
}: ReturnType<
  typeof getWeatherRequest
>): Generator<IOpenWeatherResponse> {
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

function* watchWeatherSaga(): Generator<IWatcherSaga> {
  yield takeLatest(
    getWeatherRequest.type,
    weatherSagaWorker,
  );
}

export default watchWeatherSaga;
