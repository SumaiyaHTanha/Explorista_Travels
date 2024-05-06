import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About_Us/About";
import Contact from "../Pages/Contact/Contact";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        children: [
            {
            path:'/',
            element: <Home/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/contact',
            element: <Contact/>
        },
        {
            path:'*',
            element: <p>404</p>
        },
    ]
    }
])