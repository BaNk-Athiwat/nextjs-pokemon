'use client'

import Table from "@/components/pocket/table";
import { Button } from "@nextui-org/react";

export default function PocketPage() {
    return (
        <div className="flex justify-around">
            <div className="shadow-md rounded-lg min-w-[954px] pt-4">
                <p className="text-base font-bold px-6">Pocket list ({2})</p>
                <div className="py-6 px-6">
                    <Table />
                </div>
            </div>
            <div className="flex flex-col w-[282px] h-60 shadow-md rounded-lg">
                <p className="text-base font-bold h-11 p-[10px] bg-[#FFF9E3] rounded-t-lg">
                    Order Summary
                </p>
                <div className="mt-4 px-[10px] h-full">
                    <p className="flex justify-between">
                        Subtotal
                        <span className="text-sm font-bold">{2} Product</span>
                    </p>
                    <p className="flex justify-between mt-4">
                        Quantity
                        <span className="text-sm font-bold">{6} Quantity</span>
                    </p>
                </div>
                <div className="w-full p-[10px]">
                    <Button className="w-full h-[50px] bg-[#FF6F61] text-[#F9F9F9]">
                        Proceed to checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}
