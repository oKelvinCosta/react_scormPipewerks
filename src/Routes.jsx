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
import Loading from "./components/Loading";

// Route configuration component
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
function AppRoutes() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to handle navigation based on saved page in localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      navigate(savedPage);
    }
    // To Debug
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
    setIsLoading(false);
  }, [navigate]);

  // Show loading component while loading
  if (isLoading) {
    return <Loading />;
  }

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
