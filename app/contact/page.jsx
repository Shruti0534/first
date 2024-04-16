import Link from "next/link";
import React from "react";
import LINKEDIN from "@/public/linkedin.svg";
import Image from "next/image";
import INSTAGRAM from "@/public/instagram.svg";
import GMAIL from '@/public/gmail.svg';
import FACEBOOK from '@/public/facebook.svg'

const page = () => {
  return (
    <div className="h-screen">
      <div className=" text-center">CONTACT</div>
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex items-center w-[600px]  justify-between px-4">
          <Link href={"https://www.google.com/"}  className="flex items-center  gap-3">
            <Image src={LINKEDIN} alt="LINKEDIN" className="w-7" />
            <span>LINKEDIN</span>
          </Link>
          <Link href={"https://www.google.com/"} className="flex items-center gap-3 ">
            <Image src={INSTAGRAM} alt="INSTAGRAM" className="w-7" />
            <span>INSTAGRAM</span>
          </Link>
          <Link href={"linkedin"} className="flex items-center  gap-3">
            <Image src={GMAIL} alt="GMAIL" className="w-7" />
            <span>GMAIL</span>
          </Link>
          <Link href={"linkedin"} className="flex items-center  gap-3">
            <Image src={FACEBOOK} alt="FACEBOOK" className="w-7" />
            <span>FACEBOOK</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
{
}

export default page;
