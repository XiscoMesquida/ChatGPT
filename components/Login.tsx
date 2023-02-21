'use client'
import {signIn} from "next-auth/react";
import Image from "next/image";


function Login() {
  return (
    <div className="bg-[#000000] h-screen flex flex-col items-center justify-center text-center ">
     <Image 
      src="https://images-prod.dazeddigital.com/1097/155-0-1097-938/azure/dazed-prod/1200/8/1208405.jpg"
      width={300}
      height={300}
      alt="logo"
     />
     <button onClick={() => signIn("google")} className=" text-white font-evacla text-1xl animate-pulse">
        MODEL -EVA
     </button>

    </div>
  )
}

export default Login