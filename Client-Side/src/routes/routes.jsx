import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../Utils/rooms";
import DashboardLayout from "../layout/DashboardLayout";
import MyListings from "../pages/Dashboard/Host/MyListings/MyListings";
import AddRoom from "../pages/Dashboard/Host/AddRoom/Addroom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params?.id),
      },
    ],
  },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-room",
        element: <AddRoom />,
      },
      {
        path: "my-listings",
        element: <MyListings />,
      },
    ],
  },
]);
