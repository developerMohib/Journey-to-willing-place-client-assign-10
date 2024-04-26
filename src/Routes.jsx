import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage> </ErrorPage> ,
      children: [
        {
            path: "/",
            element: <Home> </Home>,
        },
        {
          path: "/contact",
          element: <Contact> </Contact>,
        },
      ],
    },
]);