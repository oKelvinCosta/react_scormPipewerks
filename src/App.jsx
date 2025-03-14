import { useState, useEffect } from "react";
import Routes from "./Routes";
import { SCORM } from "pipwerks-scorm-api-wrapper";

function App() {
  const [scormInitialized, setScormInitialized] = useState(false);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    // Inicializa a conexão com o SCORM
    const initialized = SCORM.init();
    setScormInitialized(initialized);

    if (initialized) {
      // Obtém o nome do estudante
      const name = SCORM.get("cmi.core.student_name");
      setStudentName(name);
    }

    // Finaliza a conexão com o SCORM ao desmontar o componente
    return () => {
      if (initialized) {
        console.log("desmontar o componente");

        // SCORM.quit();
      }
    };
  }, []);

  if (!scormInitialized) {
    return <div>Erro ao inicializar o SCORM.</div>;
  }

  return (
    <>
      <h1>Bem-vindo, {studentName}!</h1>
      <Routes />
    </>
  );
}

export default App;
