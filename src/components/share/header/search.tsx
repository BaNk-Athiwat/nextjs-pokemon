"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    // const [searchTerm, setSearchTerm] = useState<string>('');

    // const handleSearch = useDebouncedCallback((term: string) => {
    //   const params = new URLSearchParams(searchParams);
    //   params.set('page', '1');
    //   if (term) {
    //     params.set('query', term);
    //   } else {
    //     params.delete('query');
    //   }
    //   replace(`${pathname}?${params.toString()}`);
    // }, 300)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { value } = e.target;
    //   setSearchTerm(value);
    //   handleSearch(value);
    // };

    // const clearSearch = () => {
    //   setSearchTerm('');
    //   handleSearch('');
    // };

    return (
        <div className="flex justify-center items-center relative">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                id="search"
                type="text"
                className="bg-[#F8F8F8] rounded-xl text-sm w-[507px] h-12 px-12 py-2 focus:outline-[#FFCB05]"
                placeholder={placeholder}
                //   value={searchTerm}
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
            <svg
                className="absolute left-6 -translate-x-1/2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.82491 15.5663C12.5481 15.5663 15.5663 12.5481 15.5663 8.82491C15.5663 5.10173 12.5481 2.0835 8.82491 2.0835C5.10173 2.0835 2.0835 5.10173 2.0835 8.82491C2.0835 12.5481 5.10173 15.5663 8.82491 15.5663Z"
                    stroke="#FFCB05"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.5137 13.8638L16.1567 16.4999"
                    stroke="#FFCB05"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {/* {searchParams.get('query') && ( */}
            <button
                className="absolute right-6 translate-x-1/2"
                // onClick={clearSearch}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99992 1.33337C4.33325 1.33337 1.33325 4.33337 1.33325 8.00004C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z"
                        stroke="#FFCB05"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.11328 9.88674L9.88661 6.1134"
                        stroke="#FFCB05"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.88661 9.88674L6.11328 6.1134"
                        stroke="#FFCB05"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {/* )} */}
        </div>
    );
}
