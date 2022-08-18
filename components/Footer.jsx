import React from 'react';
import {FaApple, FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
    return (
        <div className={"w-full bg-white py-12"}>
            {/*Button and Social Icons*/}
            <div className={" flex flex-col justify-center items-center gap-8 md:gap-0 md:flex-row md:justify-around w-full "}>
                <div >
                    <Button/>
                </div>


                <div className={"flex gap-3"}>
                    <div className={"bg-gray-200 rounded p-2"}>
                        <FaGoogle size={"20"}  />
                    </div>
                    <div className={"bg-gray-200 rounded p-2"}>
                        <FaApple size={"20"}  />
                    </div>
                    <div className={"bg-gray-200 rounded p-2"}>
                        <FaFacebook size={"20"}  />
                    </div>
                    <div className={"bg-gray-200 rounded p-2"}>
                        <FaLinkedinIn size={"20"}  />
                    </div>
                    <div className={"bg-gray-200 rounded p-2"}>
                        <FaTwitter size={"20"}  />
                    </div>
                </div>
            </div>


            {/* Line Break */}
            <div className={"h-0.5 bg-gray-200 w-[90%] my-8"}></div>


            <div className={"flex justify-center items-center "}>
                <ul className={"flex flex-col md:flex-row text-center gap-4 md:gap-0"}>
                    <Link href={"/"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold "}>Home</li>
                    </Link>
                    <Link href={"/about"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold"}>About Us</li>
                    </Link>
                    <Link href={"/contact"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold"}>Contact</li>
                    </Link>
                    <Link href={"/help"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold"}>Help</li>
                    </Link>

                </ul>
            </div>


        </div>
    );
};

export default Footer;