import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes as RoutesViews,
  useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Exemplo1 from "./pages/Exemplo1";
import Exemplo2 from "./pages/Exemplo2";
import Exemplo3 from "./pages/Exemplo3";
import Exemplo4 from "./pages/Exemplo4";

// Route pages configuration component. Where the routes are defined.
function RouteConfig() {
  const myRoutes = [
    { path: "/", element: <Exemplo1 /> },
    { path: "/exemplo2", element: <Exemplo2 /> },
    { path: "/exemplo3", element: <Exemplo3 /> },
    { path: "/exemplo4", element: <Exemplo4 /> },
  ];

  return (
    <>
      <RoutesViews>
        {myRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </RoutesViews>
    </>
  );
}

// Main AppRoutes component
// This component is responsible for rendering the Navigation and RouteConfig components
// It uses the useEffect hook to navigate to a saved page in localStorage when the component mounts
function AppRoutes() {
  const navigate = useNavigate();

  // useEffect hook to handle navigation based on saved page in localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      navigate(savedPage);
    }
  }, [navigate]);

  return (
    <>
      <Navigation />
      <RouteConfig /> {/* Use the RouteConfig component */}
    </>
  );
}

// Main Routes component with HashRouter
export default function Routes() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
