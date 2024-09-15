import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home";



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
           path:'/',
           element:<Home></Home>
            }
        ]
    }
])


export default Router;