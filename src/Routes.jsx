import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes as RoutesViews,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Exemplo1 from "./pages/Exemplo1";
import Exemplo2 from "./pages/Exemplo2";
import Exemplo3 from "./pages/Exemplo3";
import Exemplo4 from "./pages/Exemplo4";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function AppRoutes() {
  const [routes, setRoutes] = useState([
    { path: "/", element: <Exemplo1 /> },
    { path: "/exemplo2", element: <Exemplo2 /> },
    { path: "/exemplo3", element: <Exemplo3 /> },
    { path: "/exemplo4", element: <Exemplo4 /> },
  ]);

  const { setLocalStorage, getLocalStorage } = useLocalStorage("pagesCourse");

  const updateRoutes = () => {
    const pagesCourse = getLocalStorage("pagesCourse");
    console.log("updateRoutes", getLocalStorage("pagesCourse"));
    const savedPage = pagesCourse ? pagesCourse.currentPage : "/";

    const dynamicRoutes = [
      {
        path: "/",
        element:
          savedPage !== "/" ? (
            <Navigate to={savedPage} replace />
          ) : (
            <Exemplo1 />
          ),
      },
      { path: "/exemplo2", element: <Exemplo2 /> },
      { path: "/exemplo3", element: <Exemplo3 /> },
      { path: "/exemplo4", element: <Exemplo4 /> },
    ];

    setRoutes(dynamicRoutes);
  };

  // 1
  // Execute and runs when the component mounts
  // Make the first routes happen

  // 2
  // When the page is reloaded, the hook runs and direct to the right page
  useLayoutEffect(() => {
    updateRoutes();
  }, []);

  return (
    <>
      <Navigation onNavigate={updateRoutes} />
      <RoutesViews>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </RoutesViews>
    </>
  );
}

export default function Routes() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
