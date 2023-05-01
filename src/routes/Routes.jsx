import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefRecipes from "../pages/ChefRecipes";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'chef/:id',
                element:<ChefRecipes></ChefRecipes>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'about',
                element: <h2>Working!</h2>
            }
        ]
    }
])
export default router;