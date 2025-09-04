import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Zen from "@pages/Zen";

const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  { path: "/zen", element: <Zen /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
