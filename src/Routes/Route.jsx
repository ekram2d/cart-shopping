import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HOme/Home/Home/Home";

import Userorder from "../Componets/MenuItem/UserOrder/Userorder";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/order',
        element: <Userorder />
      },
    ],
  },



]);

export default router;
