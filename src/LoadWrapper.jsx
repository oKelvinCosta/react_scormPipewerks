import { useState, useEffect, useLayoutEffect } from "react";
import LoadScreen from "./components/LoadScreen";

export default function LoadWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      console.log("Todos os recursos foram carregados.");
      setLoading(false);

      // TO DEBUG
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    };

    // Adds the event to detect when the HTML and resources have been loaded
    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  // Loading screen
  if (loading) {
    return <LoadScreen />;
  }

  return <>{children}</>;
}
