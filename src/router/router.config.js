import React, { lazy } from "react";

import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders/Orders";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";

const delay = async (ms) => {
  return await new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const loadLazily = (url) => {
  return lazy(() => import(`${url}`));
};
export const appRouter = [
  { path: "/shopping", component: lazy(() => import("../pages/Home/Home")) },
  {
    path: "/myprofile",
    component: lazy(() => import("../pages/Profile/Profile")),
  },
  {
    path: "/products",
    component: lazy(() => import("../pages/ProductDetails/ProductDetails")),
  },
  {
    path: "/categories",
    component: lazy(() => import("../pages/Categories/Categories")),
  },
  {
    path: "/myorders",
    component: lazy(() => import("../pages/Orders/Orders")),
  },
];
