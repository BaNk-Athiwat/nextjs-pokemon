'use client'

import { useAppContext } from "@/context";
import { Image } from "@nextui-org/react";

export default function Table() {
    const { pocketList } = useAppContext();

    return (
        <table className="min-w-full table-fixed">
            <thead className="border-b">
                <tr className="">
                    <th className="text-left text-sm pb-4">Product name</th>
                    <th className="text-sm pb-4">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {pocketList &&
                    pocketList?.length > 0 &&
                    pocketList?.map((pocket: any) => (                            
                        <tr key={pocket?.name} className="border-t">
                            <td className="flex pt-4">
                                <Image
                                    width={80}
                                    height={80}
                                    src={pocket?.image}
                                    fallbackSrc="https://via.placeholder.com/80x80"
                                    alt="Pokemon"
                                    radius="none"
                                    className="min-w-[80px]"
                                />
                                <div className="pl-10 flex flex-col justify-center">
                                    <p className="text-base font-bold mb-2">
                                        {pocket?.name}
                                    </p>
                                    <div className="flex gap-1">
                                        {pocket?.types.map((type: string) => (
                                            <div
                                                key={pocket?.name + type}
                                                className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                            >
                                                {type}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </td>
                            <td className="text-center pt-4">11</td>
                            <td className="text-center pt-4">
                                <svg
                                    width="12"
                                    height="14"
                                    viewBox="0 0 12 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.66667 10.9999C4.84348 10.9999 5.01305 10.9297 5.13807 10.8047C5.2631 10.6796 5.33333 10.5101 5.33333 10.3333V6.33325C5.33333 6.15644 5.2631 5.98687 5.13807 5.86185C5.01305 5.73682 4.84348 5.66659 4.66667 5.66659C4.48986 5.66659 4.32029 5.73682 4.19526 5.86185C4.07024 5.98687 4 6.15644 4 6.33325V10.3333C4 10.5101 4.07024 10.6796 4.19526 10.8047C4.32029 10.9297 4.48986 10.9999 4.66667 10.9999ZM11.3333 2.99992H8.66667V2.33325C8.66667 1.80282 8.45595 1.29411 8.08088 0.919038C7.70581 0.543966 7.1971 0.333252 6.66667 0.333252H5.33333C4.8029 0.333252 4.29419 0.543966 3.91912 0.919038C3.54405 1.29411 3.33333 1.80282 3.33333 2.33325V2.99992H0.666667C0.489856 2.99992 0.320286 3.07016 0.195262 3.19518C0.0702379 3.32021 0 3.48977 0 3.66659C0 3.8434 0.0702379 4.01297 0.195262 4.13799C0.320286 4.26301 0.489856 4.33325 0.666667 4.33325H1.33333V11.6666C1.33333 12.197 1.54405 12.7057 1.91912 13.0808C2.29419 13.4559 2.8029 13.6666 3.33333 13.6666H8.66667C9.1971 13.6666 9.70581 13.4559 10.0809 13.0808C10.456 12.7057 10.6667 12.197 10.6667 11.6666V4.33325H11.3333C11.5101 4.33325 11.6797 4.26301 11.8047 4.13799C11.9298 4.01297 12 3.8434 12 3.66659C12 3.48977 11.9298 3.32021 11.8047 3.19518C11.6797 3.07016 11.5101 2.99992 11.3333 2.99992ZM4.66667 2.33325C4.66667 2.15644 4.7369 1.98687 4.86193 1.86185C4.98695 1.73682 5.15652 1.66659 5.33333 1.66659H6.66667C6.84348 1.66659 7.01305 1.73682 7.13807 1.86185C7.2631 1.98687 7.33333 2.15644 7.33333 2.33325V2.99992H4.66667V2.33325ZM9.33333 11.6666C9.33333 11.8434 9.2631 12.013 9.13807 12.138C9.01305 12.263 8.84348 12.3333 8.66667 12.3333H3.33333C3.15652 12.3333 2.98695 12.263 2.86193 12.138C2.7369 12.013 2.66667 11.8434 2.66667 11.6666V4.33325H9.33333V11.6666ZM7.33333 10.9999C7.51014 10.9999 7.67971 10.9297 7.80474 10.8047C7.92976 10.6796 8 10.5101 8 10.3333V6.33325C8 6.15644 7.92976 5.98687 7.80474 5.86185C7.67971 5.73682 7.51014 5.66659 7.33333 5.66659C7.15652 5.66659 6.98695 5.73682 6.86193 5.86185C6.73691 5.98687 6.66667 6.15644 6.66667 6.33325V10.3333C6.66667 10.5101 6.73691 10.6796 6.86193 10.8047C6.98695 10.9297 7.15652 10.9999 7.33333 10.9999Z"
                                        fill="#666666"
                                    />
                                </svg>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>

        // <div className="flex justify-between mb-2">
        //     <p className="pl-6">Product name</p>
        //     <p className="pr-40">Quantity</p>
        // </div>
        // <hr />
        // {pocketList &&
        //     pocketList?.length > 0 &&
        //     pocketList?.map((pocket: any) => (
        //         <div key={pocket?.name} className="flex">
        //             <div className="flex">
        //                 <Image
        //                     width={80}
        //                     height={80}
        //                     src={pocket?.image}
        //                     fallbackSrc="https://via.placeholder.com/80x80"
        //                     alt="Pokemon"
        //                     radius="none"
        //                     className="min-w-[80px]"
        //                 />
        //                 <div className="flex flex-col">
        //                     <p className="text-base font-bold">
        //                         {pocket?.name}
        //                     </p>
        //                     <div className="flex gap-1">
        //                         {pocket?.types.map((type: string) => (
        //                             <div
        //                                 key={pocket?.name + type}
        //                                 className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
        //                             >
        //                                 {type}
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
    );
}
