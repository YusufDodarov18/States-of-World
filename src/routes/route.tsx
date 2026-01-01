import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error"
import Layout from "../Layouts/layout";
import Home from "../pages/Home";
import { CountryDetail } from "../pages/CountryDetail";
// import Hello from "../test/Hello";

export const router=createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:":id",
                element:<CountryDetail/>
            },
            // {
            //     path:"hello",
            //     element:<Hello/>
            // },
            {
                path:"*",
                element: <Error/>
            }
        ]
    }
])