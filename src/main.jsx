import AboutMe from "pages/AboutMe/AboutMe";
import Layout from "pages/Layout/Layout";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./main.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <App />
//       </Layout>
//     ),
//   },
//   // {
//   //   path: "about-me",
//   //   element: (
//   //     <Layout>
//   //       <AboutMe />
//   //     </Layout>
//   //   ),
//   // },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="about-me" element={<AboutMe />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
