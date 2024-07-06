import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link
                href={`/pokemon-lists`}
                className="bg-[#FFCB05] hover:border-4 hover:border-[#F8F1D8] p-4 rounded-3xl shadow-xl"
            >
                Go to Pokemon List!
            </Link>
        </main>
    );
}
