import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const Navigate = useNavigate();

  const handleSaveState = (currentPage) => {
    let pagesCourse = {
      pages: ["/", "/exemplo2", "/exemplo3", "/exemplo4"],
      currentPage: currentPage,
    };

    localStorage.setItem("pagesCourse", JSON.stringify(pagesCourse));

    Navigate(currentPage);
  };

  const getPagesCourse = JSON.parse(localStorage.getItem("pagesCourse"));
  if (!getPagesCourse) {
    handleSaveState("/");
    // Update the getPagesCourse variable
    getPagesCourse = JSON.parse(localStorage.getItem("pagesCourse"));
  }
  const currentPageNumber =
    getPagesCourse.pages.indexOf(getPagesCourse.currentPage) + 1;
  const totalPages = getPagesCourse.pages.length;

  return (
    <nav className="my-8">
      <div className="container  text-center">
        <p className="">Navigation</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button
              onClick={() => {
                handleSaveState("/");
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo2");
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo3");
              }}
            >
              Fase 1
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/exemplo4");
              }}
            >
              Fase 2
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
