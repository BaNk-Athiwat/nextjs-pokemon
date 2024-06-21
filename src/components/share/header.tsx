"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
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
                    <input
                        type="search"
                        className="bg-[#F8F8F8] rounded-xl text-sm w-[507px] h-12 px-4 py-2"
                        placeholder="Search name Pokémon ..."
                    />
                </div>
                <div>
                    <ul className="flex">
                        <li className="flex items-center tracking-wider">
                            <Link
                                href={""}
                                className="hover:text-gray-500 px-3"
                            >
                                Username
                            </Link>
                        </li>
                        <li className="flex items-center tracking-wider">
                            <Link
                                href={""}
                                className="hover:text-gray-500 px-3"
                            >
                                Pocket
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
