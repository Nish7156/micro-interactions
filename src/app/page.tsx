import { PinContainer } from "@/components/customUi/3d-pin";
import { TextGenerateEffect } from "@/components/customUi/text-generate-effect";
import { SignupForm } from "@/components/pages/SIgnUpForm.tsx";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IconLoader2 } from "@tabler/icons-react";
import { MarqueeTestimonials } from "@/components/customUi/MarqueeTestimonials";
import { AnimatedListDemo } from "@/components/customUi/AnimatedListDemo";
import { ModeToggle } from "@/components/utility/ModeToggle";
import HeroSection from "@/components/pages/Home/HeroSection";
import { AnimatedModalDemo } from "@/components/pages/Home/AnimatedModalDemo";
import { Loader } from "lucide-react";

export default function Home() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <>
      {/* <div className="mx-auto max-w-lg w-full py-20">
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
        <MarqueeTestimonials/>
        <div className="my-10"></div>
        <AnimatedListDemo/>
        <ModeToggle/>
        <div className="my-10"></div>
      </div> */}
      <div className=" container">
        <HeroSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
          <div className="">
          <MarqueeTestimonials/>
          </div>
          <div className="">
            <Button>
          
              Loading
            </Button>
          </div>
          <div className="">
            <AnimatedListDemo />
          </div>
        </div>
        <AnimatedModalDemo />
      </div>
    </>
  );
}
