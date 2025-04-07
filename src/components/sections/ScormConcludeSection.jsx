import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

// SCORM
import { SCORM } from "pipwerks-scorm-api-wrapper";
import { LESSON_STATUS, FIELDS } from "@/ScormWrapper";

export default function ScormConcludeSection() {
  const [lessonStatus, setLessonStatus] = useState(null);
  useEffect(() => {
    console.log(LESSON_STATUS);
  }, []);

  const handleConclude = () => {
    // Se o código carregou o App corretamente, então já está conectado ao LMS/SCORM

    // Verifica se está conectado ao SCORM

    if (SCORM.connection.isActive) {
      const studentName = SCORM.get(FIELDS.studentName);
      alert("cmi.core.student_name: " + studentName);

      // Define o status da lição como 'completed'
      SCORM.set(FIELDS.lessonStatus, LESSON_STATUS.completed);

      // Obtém o status da lição
      setLessonStatus(SCORM.get(FIELDS.lessonStatus));
      alert("cmi.core.lesson_status: " + lessonStatus);

      // Salva as alterações no LMS
      SCORM.save();

      // Faz o lms encerrar a comunicação mandando para a página de conclusão
      SCORM.quit();
    }
  };

  return (
    <>
      <div id="scorm-conclude" className="py-[80px] bg-slate-100">
        <div className="container--780 text-center">
          <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="mb-10 mt-6">
            <Button
              variant="secondary"
              onClick={() => handleConclude()}
              disabled={
                !SCORM.connection.isActive || lessonStatus === "completed"
              }
            >
              SCORM Conclude
            </Button>
          </div>

          <div className="read-the-docs">
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
              Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é.
              Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat
              et quo num tendi nada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
