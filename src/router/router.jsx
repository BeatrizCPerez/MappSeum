import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Edit from "../pages/Edit";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/add-sculpture",
        element: <Create/>,
    }, 
    {
      path: "/edit-sculpture",
      element: <Edit/>
    }
    
  ]);

  export default router;