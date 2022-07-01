import React from "react";

const Home = React.lazy(() => import("./components/Home"));
const User = React.lazy(() => import('./pages/user/User'));
const routes = [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/user",
      element: User,
    },
]
export default routes;