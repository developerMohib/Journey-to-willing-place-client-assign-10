import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import TouristSpot from "./Pages/TouristSpot";
import AddSpots from "./Pages/AddSpots";
import MyList from "./Pages/MyList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

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
        {
          path: "/touristSpot",
          element: <TouristSpot> </TouristSpot>,
        },
        {
          path: "/addSpot",
          element: <AddSpots> </AddSpots>,
        },
        {
          path: "/myList",
          element: <MyList> </MyList>,
        },
        {
          path: "/login",
          element: <Login> </Login>,
        },
        {
          path: "/register",
          element: <Register> </Register> ,
        },
      ],
    },
]);