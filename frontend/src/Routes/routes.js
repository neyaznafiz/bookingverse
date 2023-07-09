import { Main } from "Layout";
import { Home, HotelInfo, HotelsList, Login } from "Pages";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <HotelsList />,
      },
      {
        path: "/hotels/:id",
        element: <HotelInfo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// export default routes;
