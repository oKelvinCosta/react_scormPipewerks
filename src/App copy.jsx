import { useState, useEffect, useLayoutEffect } from "react";
import Routes from "./Routes";
import { SCORM } from "pipwerks-scorm-api-wrapper";
import Loading from "./components/Loading";

function App() {
  const [scormInitialized, setScormInitialized] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [loading, setLoading] = useState(true);
  const isDevelopment = process.env.NODE_ENV === "development"; // Retorna true se o ambiente for de desenvolvimento. Ao dar build o valor será "production" retornando false.

  function developmentPlaceholder() {
    setStudentName("Kelvin$$$");
  }

  useLayoutEffect(() => {
    const handleWindowLoad = () => {
      console.log("Todos os recursos foram carregados.");
      setTimeout(() => {
        setLoading(false);
      }, 10000);
      // setLoading(false);
    };

    // Adiciona o evento para detectar quando o HTML e os recursos foram carregados
    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  // Tela de carregamento
  if (loading) {
    return <Loading />;
  }

  // Caso a API SCORM não tenha sido inicializada
  if (!scormInitialized) {
    return (
      <div>
        Erro ao inicializar o SCORM. Verifique se a API está disponível.
      </div>
    );
  }

  return (
    <>
      <h1>Bem-vindo, {studentName}!</h1>
      <Routes />
    </>
  );
}

export default App;
