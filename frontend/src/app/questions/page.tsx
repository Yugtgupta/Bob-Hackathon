"use client";
// import Link from "next/link";
import React from "react";

import { EvervaultCard, Icon } from "@/app/components/ui/evervault-card";
import { useRouter } from 'next/navigation';

function page() {
  // const [nextLink, setNextLink] = useState<string>("");

  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }
  // const [bool, setBool] = useState<boolean>(true);
  // useEffect(() => {
  //   if (nextLink !== "") {
  //     setBool;
  //   }
  // }, [nextLink]);
  return (
    <div className="w-full m-[1rem] flex flex-col">
      <div className="m-5 text-2xl font-semibold text-slate-700 text-center">Select the basis of your portfolio creation:</div>
      <div className="flex flex-wrap justify-evenly">
        {/* div for goal based box */}
        <button onClick={()=> handleNavigation('/questions/goalbased')}>
          {" "}
          <div className="border border-black/[0.2] shadow-lg shadow-slate-700 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

            <EvervaultCard text="Goal" />

            <h2 className=" text-black mt-4 text-sm font-light">
              Goal based investment will help you achieve you create your
              portfolio based on your future goals.
            </h2>
            <p className="text-sm border font-light border-black/[0.2] rounded-full mt-4 text-black  px-2 py-0.5">
              Goal Based Investment
            </p>
          </div>
        </button>
        {/* div for risk based */}
        <button onClick={()=> handleNavigation('/questions/riskbased')}>
          {" "}
          <div className="border border-black/[0.2] shadow-lg shadow-slate-700 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

            <EvervaultCard text="Risk" />

            <h2 className=" text-black mt-4 text-sm font-light">
              Goal based investment will help you achieve you create your
              portfolio based on your future goals.
            </h2>
            <p className="text-sm border font-light border-black/[0.2] rounded-full mt-4 text-black  px-2 py-0.5">
              Goal Based Investment
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default page;

// <button onClick={()=> setNextLink('goalbased')}>goal based</button>
//      <button onClick={()=> setNextLink('riskbased')}>risk based</button>
//      <button disabled={bool}><Link href={`/questions/${nextLink}`}>next</Link></button>
