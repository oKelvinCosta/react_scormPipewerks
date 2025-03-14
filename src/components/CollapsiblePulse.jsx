import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function CollapsiblePulse({ children, className }) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Desestruturação dos children para obter os diferentes slots de conteúdo
  const headerContent = React.Children.toArray(children).find(
    (child) => child.type === CollapsiblePulse.Header
  );
  const collapsibleContent = React.Children.toArray(children).find(
    (child) => child.type === CollapsiblePulse.Content
  );

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
        <CollapsibleTrigger
          variant="ghost"
          size="sm"
          className="bg-white hover:bg-gray-100 transition-colors w-full p-2 rounded-md border flex items-center justify-between  relative animate-pulseShadow"
        >
          {headerContent}
          <ChevronDown
            className={`h-4 w-4 ml-2 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>

        <CollapsibleContent
          className={`mt-4 space-y-2 overflow-hidden ${
            isOpen ? "animate-accordion-down" : "animate-accordion-up"
          }`}
        >
          {collapsibleContent}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

// Declarando os componentes auxiliares dentro do componente principal
CollapsiblePulse.Header = function CollapsiblePulseHeader({ children }) {
  return <>{children}</>;
};

CollapsiblePulse.Content = function CollapsiblePulseContent({ children }) {
  return <>{children}</>;
};
