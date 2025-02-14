import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
      <div className="bg-[#F2F9FF] w-screen h-screen flex justify-center items-center">
        <div className="w-96  flex flex-col items-center gap-4">
          <Image src={"/main.png"} width={240} alt="ohagi" height={240}/>
          <h1 className="text-xl font-cute text-[#E195AB] drop-shadow shadow-black text-center">YEAH!!!! as i thought</h1>
          <h1 className="text-xl font-cute text-[#E195AB] drop-shadow shadow-black text-center">YOU ARE MINE VALENTINE NOW</h1>
          <Image src={"/main (3).png"} width={240} alt="ohagi" height={240}/>
        </div>
      </div>  

    ); 
}

export default page