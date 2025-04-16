import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Navigation({ onNavigate }) {
  const Navigate = useNavigate();
  const { setLocalStorage, getLocalStorage } = useLocalStorage("pagesCourse");

  const handleSaveState = (goingPage) => {
    let pagesCourse = {
      pages: ["/", "/exemplo2", "/exemplo3", "/exemplo4"],
      currentPage: goingPage,
    };

    // localStorage.setItem("pagesCourse", JSON.stringify(pagesCourse));
    setLocalStorage("pagesCourse", pagesCourse);
    Navigate(goingPage);

    // Atualiza as rotas no AppRoutes
    if (onNavigate) {
      onNavigate();
    }
  };

  // let getPagesCourse = JSON.parse(localStorage.getItem("pagesCourse"));
  let getPagesCourse = getLocalStorage("pagesCourse");
  if (!getPagesCourse) {
    handleSaveState("/");
    getPagesCourse = getLocalStorage("pagesCourse");
  }

  const currentPageNumber =
    getPagesCourse.pages.indexOf(getPagesCourse.currentPage) + 1;
  const totalPages = getPagesCourse.pages.length;

  return (
    <nav className="my-8">
      <div className="container text-center">
        <p className="">Navigation</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button onClick={() => handleSaveState("/")}>Exemple 1</Button>
          </li>
          <li>
            <Button onClick={() => handleSaveState("/exemplo2")}>
              Exemple 2
            </Button>
          </li>
          <li>
            <Button onClick={() => handleSaveState("/exemplo3")}>
              Exemple 3
            </Button>
          </li>
          <li>
            <Button onClick={() => handleSaveState("/exemplo4")}>
              Exemple 4
            </Button>
          </li>
        </ul>
        <div className="m-6">
          Página {currentPageNumber}/{totalPages}
        </div>
      </div>
    </nav>
  );
}
