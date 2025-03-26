import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Para a execução do código abaixo caso esteja em ambiente de desenvolvimento
    if (isDevelopment) {
      console.warn("API SCORM não disponível em ambiente de desenvolvimento.");
      developmentPlaceholder();
      setLoading(false);
      return;
    }

    // Inicia SCORM
    // SCORM.init() faz loop para tentar inicializar a API SCORM até que ela esteja disponível.
    const initialized = SCORM.init();

    // Se iniciado, deixa retornar o restante da aplicação
    if (initialized) {
      console.log("SCORM inicializado com sucesso.");
      setScormInitialized(true);

      const name = SCORM.get("cmi.core.student_name");
      setStudentName(name);

      // No LMS define a pontuação mínima para passar/
      const scoreSetMin = SCORM.set("cmi.core.score.min", "0"); // Pontuação mínima possível.
      const scoreSetMax = SCORM.set("cmi.core.score.max", "100"); // Define a pontuação máxima
      const scoreSetRaw = SCORM.set("cmi.core.score.raw", "85"); // Define a pontuação do aluno

      setLoading(false);
    } else {
      console.error("Falha ao inicializar a API SCORM.");
    }
  }, []);

  // Tela de carregamento
  if (loading) {
    return <Loading />;
  }

  // Caso a API SCORM não tenha sido inicializada
  if (!scormInitialized && !isDevelopment) {
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
