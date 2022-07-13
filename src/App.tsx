import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/configReduxStore";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/HomePage";
import Playground from "./pages/Playground";
import {  Routes, Route } from "react-router-dom";
import Result from "./pages/Result";

App.propTypes = {};

function App() { 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<Playground />}  />
          <Route path="/result" element={<Result />}  />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
