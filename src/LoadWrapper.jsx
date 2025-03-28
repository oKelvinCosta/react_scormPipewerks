import { useState, useEffect, useLayoutEffect } from "react";
import LoadScreen from "./components/LoadScreen";

export default function LoadWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      console.log("Todos os recursos foram carregados.");
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    // Adiciona o evento para detectar quando o HTML e os recursos foram carregados
    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  // Tela de carregamento
  if (loading) {
    return <LoadScreen />;
  }

  return <>{children}</>;
}
