import { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/pages/Login";
import ListOder from "../components/pages/ListOrder";
import DetailOrder from "../components/pages/DetailOrder";
import CreateOrder from "../components/pages/CreateOrder";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <ListOder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders/:id",
    element: (
      <ProtectedRoute>
        <DetailOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create",
    element: (
      <ProtectedRoute>
        <CreateOrder />
      </ProtectedRoute>
    ),
  },
];

export default routes;
