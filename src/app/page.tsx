import { PinContainer } from "@/components/customUi/3d-pin";
import { TextGenerateEffect } from "@/components/customUi/text-generate-effect";
import { SignupForm } from "@/components/pages/SIgnUpForm.tsx";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IconLoader2 } from "@tabler/icons-react";

export default function Home() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <>
      <div className="mx-auto max-w-lg w-full py-20">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <div className="my-10"></div>
        <TextGenerateEffect words={words} />
        <div className="my-10"></div>
        <Button disabled>
        <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </Button>
        <div className="my-10"></div>
      </div>
    </>
  );
}
