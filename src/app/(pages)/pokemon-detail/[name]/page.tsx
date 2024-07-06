'use client'

import Link from "next/link";
import { Detail } from "@/components/pokemon-detail/detail"

export default function PokemonDetailPage() {
    const pokemon = {};
    return(
        <div className="flex flex-col">
            <Link href={'/pokemon-lists'}>{"< Back"}</Link>
            <Detail/>
        </div>
    );
}