import React from 'react'
import Image from 'next/image'
export default function Section1_header() {
  return (
    <div className="fixed top-[0] left-[0]  bg-white z-[100]">
      <header className="flex  justify-between h-20 items-center py-3 px-10 w-screen">
        <div className=""><Image width={50} height={50} alt="" src="/ahead-logo.png" /></div>
        <div className="">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer font-semibold ">Emotions</li>
            <li className="cursor-pointer font-semibold ">Manifesto</li>
            <li className="cursor-pointer font-semibold ">
              Self awareness test
            </li>
            <li className="cursor-pointer font-semibold ">Work with us</li>
          </ul>
        </div>
        <div className="">
          <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
            Download App
          </button>
        </div>
      </header>
    </div>
  )
}
