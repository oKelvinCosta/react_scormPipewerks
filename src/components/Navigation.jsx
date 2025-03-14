import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const Navigate = useNavigate();

  const handleSaveState = (currentPage) => {
    localStorage.setItem("currentPage", currentPage);
  };

  return (
    <nav className="my-8">
      <div className="container  text-center">
        <p className="">Navigation</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button
              onClick={() => {
                handleSaveState("/");
                Navigate("/");
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo2");
                Navigate("/exemplo2");
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo3");
                Navigate("/exemplo3");
              }}
            >
              Fase 1
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo4");
                Navigate("/exemplo4");
              }}
            >
              Fase 2
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
