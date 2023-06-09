import Main from "../Layout/Main";
import AddProperty from "../dashboard/AddProperty";
import Rent from "../pages/Rent";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproperty",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "/rent",
        element: <Rent></Rent>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
