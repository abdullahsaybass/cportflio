// icons
import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap,
  FaUsers,
  FaAccessibleIcon,
  FaBook,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wp" />,
          <FaBootstrap key="bootstrap" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="ps" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Designer / UI-UX Designer - Unique Business X Pty Ltd",
        stage: "May 2022 – Present (Part-time, 20 hrs/week)",
        details: [
          "Interpreted design briefs and collaborated with stakeholders to define objectives and constraints.",
          "Developed wireframes, mock-ups, interactive prototypes, and layouts for websites and dashboards.",
          "Collaborated with developers and project teams to ensure designs were functional, feasible, and aligned with business goals.",
        ],
      },
    ],
  },
  {
    title: "coursework",
    info: [
      {
        title: "Modern React with Redux – Udemy",
        stage: "Completed 2023",
      },
      {
        title: "The Complete JavaScript Course 2023 – Udemy",
        stage: "Completed 2022",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/30 py-20 text-center xl:text-left">
      <Circles />

      
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 left-[-300px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Creating <span className="text-accent">designs</span> that connect
            people and technology.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I began my journey as a Web Designer and UI/UX Specialist two years
            ago, working part-time while honing my skills in creating modern,
            user-friendly, and visually engaging digital experiences. Since
            then, I’ve contributed to projects that combine creativity with
            functionality—helping businesses build impactful websites and
            digital products.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Years */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-4">
                  <CountUp start={0} end={2} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100px] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex-1 flex flex-col max-w-max gap-y-2 text-white/60"
                >
                  <div className="font-light">{item.title}</div>
                  {item.stage && (
                    <div className="text-xs mb-2">{item.stage}</div>
                  )}

                  {/* details for experience */}
                  {item.details && (
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* icons */}
                  {item.icons && (
                    <div className="flex gap-4 mt-2">
                      {item.icons.map((icon, iconIndex) => (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
