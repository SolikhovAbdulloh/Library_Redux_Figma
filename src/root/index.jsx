import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../component/Category";
import Layout from "../component/Layout";
import Select_products from "../component/pages/Select_products";

export const root = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:
        [
            {
                path:'/',
                element:<CategoryPage/>
            },
            {
                path:'/Select',
                element:<Select_products/>
            }


        ]
    
}])