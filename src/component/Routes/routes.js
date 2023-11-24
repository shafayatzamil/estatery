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
import PaymentFailed from "../pages/PaymentFailed";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardAllProperty from "../pages/dashboard/DashboardAllProperty";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsersDashboard from "../pages/dashboard/AllUsersDashboard";

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
          return fetch(
            `https://estatery-backend-server.vercel.app/rent/${params.id}`
          );
        },
      },
      {
        path: "/tenecy/:propertyType/:id",
        element: <TenecyApplication></TenecyApplication>,
        loader: ({ params }) => {
          return fetch(
            `https://estatery-backend-server.vercel.app/rent/${params.id}`
          );
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
          return fetch(
            `https://estatery-backend-server.vercel.app/sell/${params.id}`
          );
        },
      },

      {
        path: "payment/success/:trainId",
        element: <PaymentSuccess />,
      },
      {
        path: "payment/failed",
        element: <PaymentFailed></PaymentFailed>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allproperty",
        element: <DashboardAllProperty />,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsersDashboard />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
