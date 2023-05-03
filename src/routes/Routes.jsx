import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefRecipes from "../pages/ChefRecipes";
import Blog from "../pages/Blog";
import PrivateRoutes from "./PrivateRoutes";
import FavoriteRecipe from "../pages/FavoriteRecipe";
import useCustomeLoader from "../hooks/useCustomeLoader";
import About from "../pages/About";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://magic-recipe-server-humayun63.vercel.app/chefInfo')
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
                element:<PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
                loader:({params}) => fetch(`https://magic-recipe-server-humayun63.vercel.app/chefInfo/${params.id}`)
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'about',
                element: <About></About>
            },
            {
                path:'favorite',
                element:<PrivateRoutes> <FavoriteRecipe></FavoriteRecipe> </PrivateRoutes>,
                loader: useCustomeLoader
            },
            {
                path:'profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            }

        ]
    }
])
export default router;