import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../MainLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import SingleRecipePage from "../pages/SingleRecipePage/SingleRecipePage";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch("https://tanim-s-kitchen-server.vercel.app/shoes")
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
          path: 'recipe/:id',
          element: <SingleRecipePage></SingleRecipePage>,
          loader: ({params}) => fetch(`https://tanim-s-kitchen-server.vercel.app/recipe/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }

      ]
    },
    {
      path:'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: '',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    }
  ]);
  export default router;