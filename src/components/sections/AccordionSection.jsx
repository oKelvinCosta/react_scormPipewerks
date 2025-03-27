import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import CollapsiblePulse from "@/components/CollapsiblePulse";

export default function AccordionSection() {
  return (
    <>
      <div
        id="accordion"
        className="py-[80px] bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        <div className="container--780">
          <h2>Accordion</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible>
              {Array.from({ length: 5 }).map((_, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className=" "
                >
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div>
              <CollapsiblePulse>
                <CollapsiblePulse.Header>
                  <h6>@peduarte starred 3 repositories</h6>
                </CollapsiblePulse.Header>
                <CollapsiblePulse.Content>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                </CollapsiblePulse.Content>
              </CollapsiblePulse>

              <CollapsiblePulse className="mt-6">
                <CollapsiblePulse.Header>
                  <h6>@peduarte starred 3 repositories</h6>
                </CollapsiblePulse.Header>
                <CollapsiblePulse.Content>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                </CollapsiblePulse.Content>
              </CollapsiblePulse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
