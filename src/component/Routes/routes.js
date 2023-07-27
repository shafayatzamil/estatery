import Main from "../Layout/Main";
import AddProperty from "../dashboard/AddProperty";
import CardDetails from "../pages/CardDetails";
import PaymentSuccess from "../pages/PaymentSuccess";
import Rent from "../pages/Rent";
import Sell from "../pages/Sell";
import TenecyApplication from "../pages/TenecyApplication";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
      {
        path: "/rent/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/rent/${params.id}`);
        },
      },
      {
        path: "/tenecy/:propertyType/:id",
        element: <TenecyApplication></TenecyApplication>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/rent/${params.id}`);
        },
      },

      {
        path: "/sell",
        element: <Sell></Sell>,
      },
      {
        path: "/sell/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/sell/${params.id}`);
        },
      },

      {
        path: "/payment/success/:trainid",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
