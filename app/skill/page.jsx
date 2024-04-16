import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    const SKILLS=[
        {
            logo: '/java.svg',
            name:'JAVA',
            link:'/java.svg'
        },
        {
            logo: '/html.svg',
            name:'HTML',
            link:''
        },
        {
            logo: '/css.svg',
            name:'CSS',
            link:''
        },
    ]
  return (
    <div className=" flex justify-center items-center w-full h-screen">
     <div>
     {
        SKILLS.map((i)=>{
            return <div className=" grid grid-cols-2 gap-20">
            <div className=" flex  gap-4 items-center">
              <Image src={i.logo} alt="" width={30} height={30} />
              <span className=" text-2xl font-extrabold">{i.name}</span>
            </div>
            <Link
              href={i.link}
              className=" italic underline underline-offset-2 text-yellow-300  "
            >
              {" "}
              View Certificate
            </Link>
          </div>
        })
     }
     </div>
     
    </div>
  );
};

export default page;
