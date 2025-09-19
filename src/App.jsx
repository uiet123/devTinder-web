import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Feed from "./components/Feed"
const App = () => {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
       <Route path="/" element={<Feed />}></Route> 
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
