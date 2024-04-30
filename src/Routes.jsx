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
import Private from "./Components/Private"
import Protected from "./Components/Protected";
import ViewDetails from "./Components/ViewDetails";
import Update from "./Components/Update";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage> </ErrorPage> ,
      children: [
        {
            path: "/",
            element: <Home> </Home>,
            loader : () => fetch(`http://localhost:5000/touristSpot`)
        },
        {
          path: "/contact",
          element: <Contact> </Contact>,
        },
        {
          path: "/touristSpot",
          element: <TouristSpot> </TouristSpot>,
          loader : () => fetch(`http://localhost:5000/touristSpot`)
        },
        {
          path: "/viewDetails/:id",
          element: <Protected> <ViewDetails> </ViewDetails> </Protected>,
          loader: () => fetch(`http://localhost:5000/touristSpot`)
        },
        {
          path: "/addSpot",
          element: <Protected> <AddSpots> </AddSpots> </Protected> ,
        },
        {
          path: "/myList",
          element: <Private> <MyList> </MyList> </Private> ,
          loader : () => fetch(`http://localhost:5000/touristSpot`)
        },
        {
          path: "/login",
          element: <Login> </Login>,
        },
        {
          path: "/update/:id",
          element: <Update> </Update> ,
          loader : ({params}) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
        },
        {
          path: "/register",
          element: <Register> </Register> ,
        },
      ],
    },
]);