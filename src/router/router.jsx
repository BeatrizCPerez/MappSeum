import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Edit from "../components/Edit";



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