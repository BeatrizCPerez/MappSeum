import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NavFooter from "../components/NavFooter";
import { getSculptures } from "../services/sculptures-services";
import Form from "../pages/Form/Form";

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
        element: <Form method="post"/>,
      },
      {
        path: "/edit-sculpture/:id",
        element: <Form method="put"/>
      }
    ]
  }
]);

export default router;