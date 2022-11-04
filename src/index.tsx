import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.scss";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const container = document.getElementById("root")!;
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
