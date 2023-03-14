import { configureStore } from '@reduxjs/toolkit';

// import rootReducer from './root-reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import rootReducer from './root-reducer';

import persistedReducer from './root-reducer';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
