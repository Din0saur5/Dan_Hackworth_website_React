import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import "./App.css"
import Footer from "./components/Footer";


const AppLayout = () =>{

  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
   errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
    ]
  }
  
  
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);