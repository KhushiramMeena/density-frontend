"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const vacancies = [
  {
    jobTitle: "Senior Full Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 65-85, 1.5%-2.5% Equity",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 3.5%-7.5% Equity",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 8.5%-2.5% Equity",
  },
];

const Section11_vacancies = () => {
  return (
    <section className="mt-20 py-8 px-24 h-96">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%", // Adjust the width as needed
          overflow: "hidden", // Hide overflowing text while sliding
        }}
      >
        <h1 className="text-5xl font-bold">Open Vacancies</h1>
      </motion.div>
      <div className="mt-12 grid grid-cols-3 justify-between gap-8">
        {vacancies.map((vac, index) => {
          return <HoverCard key={index} vac={vac} index={index} />;
        })}
      </div>
    </section>
  );
};

const HoverCard = ({ vac, index }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  return (
    <>
      <motion.div
        initial={{ height: 170 }}
        whileHover={{ height: 250 }}
        key={index}
        onHoverStart={() => setButtonVisible(true)}
        onHoverEnd={() => setButtonVisible(false)}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] hover:cursor-pointer"
      >
        <div className="rounded-2xl  p-6 px-12">
          <h2 className="text-xl font-bold">{vac.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li className="">{vac.position}</li>
            <li className="">{vac.location}</li>
            <li className="">{vac.pay}</li>
          </ul>
        </div>
        {isButtonVisible && (
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
          >
            Click Me
          </motion.button>
        )}
      </motion.div>
    </>
  );
};

export default Section11_vacancies;
