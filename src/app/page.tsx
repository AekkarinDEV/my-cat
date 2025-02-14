'use client'
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function Home() {

  const [isNo,setIsNo] = useState(false)


  const firstNo = () => {
    setIsNo(true)
  }

  const [top,setTop] = useState(800)
  const [left,setLeft] = useState(250)

  const dodge = () => {
    setTop(Math.floor(Math.random() * 800) + 1)
    setLeft(Math.floor(Math.random() * 250) + 1)
  }

  const sheSaidYEs = () => {
    redirect("/yes")
  }


  return (
    <div className="bg-[#F2F9FF] w-screen h-screen flex justify-center items-center">
      <div className="w-96  flex flex-col items-center gap-4">
        {isNo ? <Image src={"/main (2).png"} width={240} alt="ohagi" height={240}/> :<Image src={"/main (1).png"} width={240} alt="ohagi" height={240}/>}
        <h1 className="text-xl font-cute text-[#E195AB] drop-shadow shadow-black">WILL YOU BE MINE VALENTINE??</h1>
        <div className="grid w-full grid-cols-2 px-8">
          <button onClick={sheSaidYEs} className="border-2 border-[#524A4E] text-[#524A4E] py-1 rounded-xl bg-white w-32 font-cute">Yessss!!!</button>
          {isNo ? <div></div>: <button className="border-2 border-[#BB8760] text-[#BB8760] py-1 rounded-xl bg-white w-32 font-cute top-" onClick={firstNo}>No!!!</button>}
        </div>
      </div>
      {isNo ? <button onClick={dodge} style={{top:top, left:left}} className={`border-2 border-[#BB8760] text-[#BB8760] py-1 rounded-xl bg-white w-32 font-cute fixed `}>No!!!</button>:null}
    </div>     
  ); 
}
