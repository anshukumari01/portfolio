"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";
import skills from "@/data/skills";

const HomeSection3 = ({ current, setCurrent }) => {
  const skillsRef = useRef(null);

  const isInView = useIsInViewport(skillsRef);

  useEffect(() => {
    if (isInView && current !== "skills") setCurrent("skills");

    return () => {
      if (isInView && current === "skills") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[100vh] items-center justify-center"
      id="skills"
      elementRef={skillsRef}
    >
      <ConstraintedBox classNames="p-4 py-12">
        <h2 className="text-center mx-auto">
        Technical   <span className="text-[var(--successColor60)]">Skills</span>
        </h2>

        <WrappedBox classes="justify-items-center grid-cols-2 sm:grid-cols-4 mt-12">
          {skills.map((service, index) => {
            return (
              <Column
                key={`skill-${index}`}
                classes=" p-4 px-8  items-center  "
              >
                <Image
                  src={service.icon}
                  alt={`service-${index}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={service.icon}
                  style={{
                    objectFit: "cover",
                    width: "4rem",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />

                <h5 className="font-bold mt-4">{service.title}</h5>

                
              </Column>
            );
          })}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
