import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import {
  Routes,
  Route,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import "./assets/scss/style.scss";
import HomeTemplate from "./template/homeTemplate/HomeTemplate";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Profile from "./pages/profile/Profile";
import Carts from "./pages/carts/Carts";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import MenuProfile from "./components/menuProfile/MenuProfile.jsx";
import MenuOrderHistory from "./components/menuOrderHistory/MenuOrderHistory.jsx";
import MenuFavourite from "./components/menuFavourite/MenuFavourite.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.css";

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}>
              {" "}
            </Route>
          </Route>
          <Route path="" element={<Profile />}>
            <Route path="profile" element={<MenuProfile />}></Route>
            <Route path="order" element={<MenuOrderHistory />}></Route>
            <Route path="favourite" element={<MenuFavourite />}></Route>
          </Route>
          <Route path="carts" element={<Carts />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </HistoryRouter>
  </Provider>
);
