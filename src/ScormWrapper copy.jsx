import { useState, useEffect, useLayoutEffect } from "react";
import Routes from "./Routes";
import { SCORM } from "pipwerks-scorm-api-wrapper";
import LoadScreen from "./components/LoadScreen";

export const LESSON_STATUS = {
  notAttempted: "not attempted",
  incomplete: "incomplete",
  completed: "completed",
  passed: "passed",
  failed: "failed",
};

export const FIELDS = {
  lessonLocation: "cmi.core.lesson_location",
  lessonStatus: "cmi.core.lesson_status",
  suspendData: "cmi.suspend_data",
  studentName: "cmi.core.student_name",
  scoreRaw: "cmi.core.score.raw",
};

export default function ScormWrapper({ children }) {
  const [scormInitialized, setScormInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const isDevelopment = process.env.NODE_ENV === "development"; // Retorna true se o ambiente for de desenvolvimento. Ao dar build o valor será "production" retornando false.

  function developmentPlaceholder() {}

  function development() {
    // Para a execução do código abaixo caso esteja em ambiente de desenvolvimento
    if (isDevelopment) {
      console.warn("API SCORM não disponível em ambiente de desenvolvimento.");
      setScormInitialized(true);
      developmentPlaceholder();
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }

  useEffect(() => {
    const handleWindowLoad = () => {
      console.log("Todos os recursos foram carregados.");
      setLoading(false);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 50000);
    };

    // Adiciona o evento para detectar quando o HTML e os recursos foram carregados
    window.addEventListener("load", handleWindowLoad);

    development();

    // Inicia SCORM
    // SCORM.init() faz loop para tentar inicializar a API SCORM até que ela esteja disponível.
    const initialized = SCORM.init();

    // Se iniciado, deixa retornar o restante da aplicação
    if (initialized) {
      console.log("SCORM inicializado com sucesso.");
      setScormInitialized(true);

      const name = SCORM.get("cmi.core.student_name");
      console.log("cmi.core.student_name", name);

      // No LMS define a pontuação mínima para passar/
      const scoreSetMin = SCORM.set("cmi.core.score.min", "0"); // Pontuação mínima possível.
      const scoreSetMax = SCORM.set("cmi.core.score.max", "100"); // Define a pontuação máxima
      const scoreSetRaw = SCORM.set("cmi.core.score.raw", "85"); // Define a pontuação do aluno

      setLoading(false);
    } else if (!isDevelopment) {
      console.error("Falha ao inicializar a API SCORM.");
    }

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  // Tela de carregamento
  if (loading) {
    return <LoadScreen />;
  }

  // Caso a API SCORM não tenha sido inicializada
  if (!scormInitialized) {
    return (
      <div>
        Erro ao inicializar o SCORM. Verifique se a API está disponível.
      </div>
    );
  }

  return <>{children}</>;
}
