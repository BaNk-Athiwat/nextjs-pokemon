"use client";

import Link from "next/link";
import Image from "next/image";
import Search from "./search";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center bg-[#FFCB05] h-[42px] text-sm px-14">
                <div>Welcome to Pokemon shop!</div>
                <ul className="flex">
                    <li className="flex items-center tracking-wider">
                        <Link href={""} className="hover:text-gray-500">
                            Contact 123456
                        </Link>
                        <div className="border-r border-black align-baseline h-3 m-3"></div>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={""} className="hover:text-gray-500">
                            Track your order
                        </Link>
                        <div className="border-r border-black align-baseline h-3 m-3"></div>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={"/manage"} className="hover:text-gray-500">
                            All Offers
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="relative flex justify-between items-center h-20 text-xs bg-[#FFFFFF] shadow-md px-14">
                <Image
                    src="https://via.placeholder.com/156x57"
                    alt="Picture for login page"
                    width={156}
                    height={57}
                />
                <div className="flex justify-center items-center absolute left-0 w-full text-base">
                    <Search placeholder={"Search name Pokémon ..."} />
                </div>
                <div className="z-10 text-base font-normal">
                    <ul className="flex">
                        <li className="flex items-center">
                            <Link
                                href={""}
                                className="flex items-center text-[#666666] px-3"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12"
                                        cy="8"
                                        r="4.75"
                                        stroke="#FFCB05"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                                        stroke="#FFCB05"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="pl-2">Username</span>
                            </Link>
                            <div className="text-[#D9D9D9]">|</div>
                        </li>
                        <li className="flex items-center">
                            <Link
                                href={""}
                                className="flex items-center text-[#666666] pl-3"
                            >
                                <div className="relative">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                            stroke="#FFCB05"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                            stroke="#FFCB05"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.4955 12H15.5045"
                                            stroke="#FFCB05"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.49451 12H8.50349"
                                            stroke="#FFCB05"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="flex justify-center items-center absolute top-0 right-0 w-[15px] h-[15px] bg-[#373737] rounded-full text-[10px] text-[#F9F9F9] translate-x-1.5 -translate-y-0.5">
                                        {0}
                                    </span>
                                </div>
                                <span className="pl-2">Pocket</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
