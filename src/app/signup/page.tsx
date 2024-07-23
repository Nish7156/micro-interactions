import { SignupForm } from "@/components/pages/SIgnUpForm.tsx";
import React from "react";

function page() {
  return (
    <div>
      <div className="max-w-md w-full h-screen justify-center flex items-center mx-auto ">
        <SignupForm />
      </div>
    </div>
  );
}

export default page;
