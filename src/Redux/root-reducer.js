import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authSlice from './auth/auth-slice';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  contacts: contactsSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default rootReducer;
