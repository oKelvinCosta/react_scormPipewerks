import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Img from "@/components/Img";

export default function CardSection() {
  return (
    <>
      <div id="cards" className="py-[80px] bg-slate-100">
        <div className="container--780  text-left">
          <h2>Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            <Card>
              <CardHeader>
                <Img
                  src={`./imgs/Task.jpg`}
                  className={`aspect-video`}
                  alt="Vite logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>

            <Card>
              <Img
                src={`./imgs/Task.jpg`}
                className={`mb-5 aspect-video`}
                alt="Vite logo"
              />
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                  malandris se pirulitá. A ordem dos tratores não altera o pão
                  duris. Suco de cevadiss deixa as pessoas mais interessantis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Img
                  src={`./vite.svg`}
                  className={`rounded-lg mx-auto w-full max-w-[140px]`}
                  alt="Vite logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
