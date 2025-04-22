"use client";

import { useRef, useEffect } from "react";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import FilledButton from "@/components/common/FilledButton";
import Strings from "@/constants/strings";
import About from "@/data/about";
import useIsInViewport from "@/hooks/useIsInViewport";

const HomeSection1 = ({ current, setCurrent }) => {
  const homeRef = useRef(null);

  const isInView = useIsInViewport(homeRef);

  const onHandleClickTalkBtn = () => {
    if (typeof window === "undefined") return;

    window.open(Strings.linkedInLink, "_blank");
  };

  useEffect(() => {
    if (isInView && current !== "about") setCurrent("about");

    return () => {
      if (isInView && current === "about") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[90vh] items-center justify-center"
      id="about"
      elementRef={homeRef}
    >
      
            <p className="max-w-sm text-center">{About.welcomeText}</p>

            <h1 className="text-[var(--successColor60)] text-center">{About.fullName}</h1>

            <p className="font-semibold max-w-sm text-center">{About.designation}</p>

            <p className="mt-8 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
              {About.description1}
            </p>

            <p className="mt-8 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg text-center ">
              {About.description2}
            </p>

            <p className="mt-8 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
              {About.description3}
            </p>

            <FilledButton
              label="Connect"
              onClick={onHandleClickTalkBtn}
              className="mt-8 min-w-[10rem]"
            />

            
              
         
      

          
      
    </ResponsiveBox>
  );
};

export default HomeSection1;
