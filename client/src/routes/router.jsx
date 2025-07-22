import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllEvents from "../pages/AllEvents";
import Archived from "../pages/Archived";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/all-events",
        Component: AllEvents,
      },
      {
        path: "/archived",
        Component: Archived,
      },
    ],
  },
]);
