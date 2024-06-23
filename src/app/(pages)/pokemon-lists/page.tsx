import Table from "@/components/pokemon-lists/table";
import { Suspense } from "react";

export default function PokemonListsPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <Suspense
            key={query + currentPage}
            // fallback={<InvoicesTableSkeleton />}
        >
            <Table query={query} currentPage={currentPage} />
        </Suspense>
    );
}
