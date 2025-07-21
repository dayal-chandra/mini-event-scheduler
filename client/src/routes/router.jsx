import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllEvents from "../pages/AllEvents";

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
    ],
  },
]);
