import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contactsReducer } from "./contacts";
import { authRedusers } from "./auth";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authRedusers),
    contacts: contactsReducer,
  },
  middleware,
});
const persistor = persistStore(store);

export { store, persistor };
