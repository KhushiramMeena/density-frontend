"use client";
import React from "react";
import Image from "next/image";
import Fade from 'react-awesome-reveal';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    // transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;
const Section6_improvement = () => {

  
  return (
    <section className="px-20 mt-10 mb-24 ">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-xl font-bold text-black">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-6xl pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring",delay:0.3 }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-20 pt-14 h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
          <Reveal keyframes={customAnimation}>
          {[...Array(8)].map((val, index) => {
            return (
              <div key={index}
              >
                <motion.div
                 className=" max-w-[40rem] relative align-top pl-8">
                  <div style={{left:"-12px"}} className="absolute">🟣</div>
                  <p className="text-xl font-bold">It&apos;s not easy as 1-2-3</p>
                  <p className="mt-3">
                    The journey may be long but our sessions are quick. We get
                    to the point and tell you what you want to know (and nothing
                    else).
                  </p>
                </motion.div>
              </div>
            );
          })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Section6_improvement;

