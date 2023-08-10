import  React from "react";
// import ErrorPage from "./error-page";
import  ReactDOM from "react-dom/client";
import Root from "./routes/root";
import NewBorn from "./routes/NewBorn";
import NewDeath from "./routes/NewDeath";
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
  },
  {
    path:'/new-born',
    element:<NewBorn/>,
  },
  {
    path:'/death',
    element:<NewDeath/>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);