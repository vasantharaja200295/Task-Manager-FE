// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducers from "./reducers";

// Define persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };
