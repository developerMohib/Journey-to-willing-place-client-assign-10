
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import MainProvider from "./MainProvider/MainProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </>
);
