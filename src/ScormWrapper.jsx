import { useState, useEffect, useLayoutEffect } from "react";
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
  const [error, setError] = useState(false);
  // Returns TRUE if the environment is development. When building, the value will be "production", returning false.
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    const initialize = async () => {
      // In Devlopment environment
      if (isDevelopment) {
        console.log(
          "%c ########## DEVELOPMENT ENVIRONMENT ########## ",
          "background: #00f; color: white"
        );
        console.log(
          "%c SCORM API not available in development environment. ",
          "background: #00f; color: white"
        );
        console.log(
          "%c ----------------------------------------------- ",
          "background: #00f; color: white"
        );

        setScormInitialized(true);
        return;
      }
      try {
        await initializeScorm(20, 100); // Initialize SCORM with retries
        setScormInitialized(true);
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    };

    initialize();
  }, []);

  if (error) {
    return (
      <div>
        <p>
          Erro ao inicializar o SCORM. Por favor, tente novamente mais tarde.
        </p>
      </div>
    );
  }

  // Loading screen
  // If the SCORM API has not been initialized
  if (!scormInitialized) {
    return (
      <div>
        <LoadScreen />
      </div>
    );
  }

  return <>{children}</>;
}

/**
 * Initializes the SCORM API with retries and delay.
 * The pipwerks-scorm-api-wrapper cover only find the API in the window object.
 * But doesn't cover the case when the API is not available or delayed.
 * So we need to create a function to retry the initialization of the SCORM API.
 *
 * @param {number} [retries=5] - The maximum number of retry attempts.
 * @param {number} [delay=1000] - The delay in milliseconds between attempts.
 * @returns {Promise<boolean>} - A promise that resolves to true if SCORM is initialized successfully.
 */
function initializeScorm(retries = 5, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attemptInitialization = (attempt) => {
      console.log(`Tentativa de inicialização do SCORM: ${attempt}`);
      const initialized = SCORM.init();

      if (initialized) {
        console.log("SCORM inicializado com sucesso.");
        resolve(true);
      } else if (attempt < retries) {
        console.warn(
          `Falha na tentativa ${attempt}. Tentando novamente em ${delay}ms...`
        );
        setTimeout(() => attemptInitialization(attempt + 1), delay);
      } else {
        console.error("Falha ao inicializar o SCORM após várias tentativas.");
        reject(new Error("Não foi possível inicializar o SCORM."));
      }
    };

    attemptInitialization(1);
  });
}
