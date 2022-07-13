import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import apiMiddleware from "./middleware/apiMiddleware";

const persistConfig = {
  key: "travia",
  storage,
  whitelist: ["questionsReducer"], // which reducer want to store
};

const persist = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persist,
  applyMiddleware(thunk, apiMiddleware)
);
export const persistor = persistStore(store);
