import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home"
import Contact from "../components/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    }, 
    
  ]);

  export default router;