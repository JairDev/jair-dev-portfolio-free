import Home from "pages/Home";
import MoreProjects from "pages/MoreProjects/MoreProjects";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Lenis from "@studio-freight/lenis";
import App from "./App";
import "./main.css";

// const lenis = new Lenis({
//   lerp: 0.1,
//   smooth: true,
// });
// const scrollFn = () => {
//   lenis.raf();
//   requestAnimationFrame(scrollFn);
// };
// requestAnimationFrame(scrollFn);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <MoreProjects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
