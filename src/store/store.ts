import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import weather from '@store/features/weather/weatherSlice';
import calendar from '@store/features/calendar/calendarSlice';
import rootSaga from '@store/sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  weather,
  calendar,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const store = configureStore({
  reducer: {
    weather,
    calendar,
    persistedReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
