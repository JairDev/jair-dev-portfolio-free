import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AboutMe from "pages/AboutMe/AboutMe";
import "./main.css";
import ProjectsDescription from "components/ProjectDescription/ProjectDescription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="projects/:id" element={<ProjectsDescription />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
