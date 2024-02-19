import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import NavFooter from "../components/NavFooter";
import { getSculptures } from "../services/sculptures-services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getSculptures
      },
      {
        path: "/add-sculpture",
        element: <Create />,
      },
      {
        path: "/edit-sculpture/:id",
        element: <Edit />
      }
    ]
  }



]);

export default router;