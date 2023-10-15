"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const Section2_promotion = () => {
    return (
        <div className="px-20 mt-28">
            <div style={{ height: "550px" }} className='bg-bgBlue relative rounded-3xl flex flex-col md:flex-row overflow-hidden'>
                <div className=' flex basis-1/2 items-center justify-center '>
                    <div className='pl-20  flex items-center justify-start flex-col'>
                        <div className='w-full'><p className='text-lg'>Ahead app</p></div>
                        <div><p className='mt-5  text-5xl font-bold'>Master Your life by mastering emotions</p></div>
                        <div className="flex gap-7 items-center  w-full">
                            <Image
                                width={150}
                                height={30}
                                alt="Apple Play Store"
                                src="/appleStoreIcon.svg"
                                className="cursor-pointer"
                            />
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    {[...Array(5)].map((val, index) => {
                                        return (
                                            <Image
                                                alt="star"
                                                src="/starIcon.svg"
                                                width={16}
                                                height={16}
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                                <p className="">100+ AppStore reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 flex items-center justify-center w-full'>
                    {/* <div className='flex items-center  justify-center bg-bgMobile h-60 w-60 rounded-full'> */}
                    <div className='h-64 w-64 flex items-center '><Image className='h-full w-full'height={100} width={100} src="/mobile.svg" alt="" /></div>
                    {/* </div> */}
                    {/* dashed circular div */}
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: { opacity: 1, rotate: 360 },
                        }}
                        transition={{
                            type: "",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{ border: "3px solid white ", borderStyle: "dashed" }} className=' absolute rounded-full h-96 w-96  border-dashed border-white'>
                        {/* red ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ top: "55px" }} className='absolute h-16 w-12'><Image height={100} width={100} className='h-full w-full' src="/blue-ghost.png" alt="" /></motion.div>
                        {/* blue ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ right: "-30px", top: "50%", transform: "translate(-50%,-50%)" }} className='absolute h-16 w-14'><Image height={100} width={100} className='h-full w-full' src="/red-ghost.png" alt="" /></motion.div>
                        {/* voilet ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ bottom: "-22px", right: "50%" }} className='absolute h-14 w-12'><Image height={100} width={100} src="/newGhost.png" alt="" /></motion.div>
                    </motion.div>
                </div>

                {/* leaf div */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={{
                        visible: {
                            x: [0, 10],
                            y: [55, -25],
                            rotate: 25,
                        },
                        hidden: { y: 35 },
                    }}
                    animate={{
                        x: [0, 10],
                        y: [55, -5],
                        rotate: 25,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="h-28 w-24 absolute"
                    style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
                >
                    <Image height={100} width={100} src="/leaf.png" alt="" />
                </motion.div>

                {/* small circle 1 */}
                <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x :-150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{bottom:"-13px",left:"150px"}} className='absolute bg-orange-300 rounded-full h-12 w-12'></motion.div>
                {/* small circle 2 */}
                <motion.div whileInView="visible" viewport={{ once: true }} animate={{ y :-150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{left:"-15px",top:"50%"}} className='absolute bg-blue-300 rounded-full h-12 w-12'></motion.div>
                {/* small circle 3 */}
                <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x :-150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{right:"150px",top:"-15px"}} className='absolute bg-yellow-300 rounded-full h-12 w-12'></motion.div>
                {/* Single Leaf */}
                <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x :150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }}  style={{left :"150px",top:"0px"}} className='absolute  h-12 w-12'><Image src="/singleLeaf.png" height={48} width={48} alt="" /></motion.div>
            </div>
        </div>
    )
}

export default Section2_promotion