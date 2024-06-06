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
import AddedRecipes from "../Dashboard/AddedRecipes/AddedRecipes";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch("http://localhost:3000/shoes")
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
          path: 'recipe/:id',
          element: <SingleRecipePage></SingleRecipePage>,
          loader: ({params}) => fetch(`http://localhost:3000/recipe/${params.id}`)
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
          element: <PrivateRoute><AddedRecipes></AddedRecipes></PrivateRoute>
        },
        {
          path: 'update/:id',
          element: <PrivateRoute><AddedRecipes></AddedRecipes></PrivateRoute>,
          loader: ({params}) => {fetch(`http://localhost:3000/`)}
        }
      ]
    }
  ]);
  export default router;