"use client";

import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Image,
    Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import Pagination from "@/components/share/pagination";

export default function Table({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const perPage = 20;

    const [format, setFormat] = useState<string>("grid");
    const [pokemonList, setPokemonList] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [pokemonsCount, setPokemonsCount] = useState(0);

    useEffect(() => {
        async function getPokemonList() {
            const offset = perPage * (currentPage - 1);
            const data = await fetchPokemonList(offset);
            setPokemonList(data);
        }
        async function getPokemon() {
            const data = await fetchPokemonByName(query);
            if (data) {
                let arr = [];
                arr.push(data);
                setPokemonList(arr);
            }
        }
        if (query) {
            getPokemon();
        } else {
            getPokemonList();
        }
    }, [query, currentPage]);

    const fetchPokemonList = async (offset: number) => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${perPage}`
        );
        const pokemonList = response.data.results;
        const totalPage = Math.ceil(Number(response.data.count) / perPage);
        setTotalPages(totalPage);
        setPokemonsCount(response.data.count);

        const detailedPokemonPromises = pokemonList.map(
            async (pokemon: any) => {
                const pokemonDetail = await axios.get(pokemon.url);
                return {
                    name: pokemonDetail.data.name,
                    types: pokemonDetail.data.types.map(
                        (type: any) => type.type.name
                    ),
                    abilities: pokemonDetail.data.abilities.map(
                        (ability: any) => ability.ability.name
                    ),
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.data.id}.png`,
                };
            }
        );

        return Promise.all(detailedPokemonPromises);
    };

    const fetchPokemonByName = async (name: string) => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );

            const pokemon = response.data;
            const detailedPokemon = {
                name: pokemon.name,
                types: pokemon.types.map((type: any) => type?.type.name),
                abilities: pokemon.abilities.map(
                    (ability: any) => ability?.ability.name
                ),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            };

            return detailedPokemon;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <p>Products ({pokemonsCount})</p>
                <ButtonGroup>
                    <Button
                        isIconOnly
                        aria-label="grid"
                        onClick={() => setFormat("grid")}
                        size="sm"
                        className={clsx("bg-[#F8F8F8]", {
                            "bg-[#FFCB05]": format === "grid",
                        })}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.6667 5.68004V2.65337C14.6667 1.71337 14.24 1.33337 13.18 1.33337H10.4867C9.42667 1.33337 9 1.71337 9 2.65337V5.67337C9 6.62004 9.42667 6.99337 10.4867 6.99337H13.18C14.24 7.00004 14.6667 6.62004 14.6667 5.68004Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.00016 5.68004V2.65337C7.00016 1.71337 6.5735 1.33337 5.5135 1.33337H2.82016C1.76016 1.33337 1.3335 1.71337 1.3335 2.65337V5.67337C1.3335 6.62004 1.76016 6.99337 2.82016 6.99337H5.5135C6.5735 7.00004 7.00016 6.62004 7.00016 5.68004Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.00016 13.18V10.4867C7.00016 9.42667 6.5735 9 5.5135 9H2.82016C1.76016 9 1.3335 9.42667 1.3335 10.4867V13.18C1.3335 14.24 1.76016 14.6667 2.82016 14.6667H5.5135C6.5735 14.6667 7.00016 14.24 7.00016 13.18Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                    <Button
                        isIconOnly
                        aria-label="lists"
                        onClick={() => setFormat("lists")}
                        size="sm"
                        className={clsx("bg-[#F8F8F8]", {
                            "bg-[#FFCB05]": format === "lists",
                        })}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.2668 9H2.7335C1.7335 9 1.3335 9.42667 1.3335 10.4867V13.18C1.3335 14.24 1.7335 14.6667 2.7335 14.6667H13.2668C14.2668 14.6667 14.6668 14.24 14.6668 13.18V10.4867C14.6668 9.42667 14.2668 9 13.2668 9Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.2668 1.33337H2.7335C1.7335 1.33337 1.3335 1.76004 1.3335 2.82004V5.51337C1.3335 6.57337 1.7335 7.00004 2.7335 7.00004H13.2668C14.2668 7.00004 14.6668 6.57337 14.6668 5.51337V2.82004C14.6668 1.76004 14.2668 1.33337 13.2668 1.33337Z"
                                stroke="#373737"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </ButtonGroup>
            </div>
            {pokemonList && pokemonList.length > 0 ? (
                <>
                    {format === "grid" ? (
                        <div className="grid grid-cols-4 gap-8 place-items-center">
                            {pokemonList &&
                                pokemonList.length > 0 &&
                                pokemonList.map((pokemon: any) => (
                                    <Card
                                        key={format + pokemon?.name}
                                        className="rounded-lg max-w-[250px] min-h-[378px] bg-[#FAFAFA]"
                                    >
                                        <Image
                                            width={250}
                                            height={250}
                                            src={pokemon?.image}
                                            fallbackSrc="https://via.placeholder.com/250x250"
                                            alt="Pokemon"
                                            radius="none"
                                        />
                                        <CardBody className="flex flex-col items-start gap-2 px-[10px] pt-[10px] pb-0">
                                            <p className="text-base font-bold">
                                                {pokemon?.name}
                                            </p>
                                            <div className="flex gap-1">
                                                {pokemon?.types.map(
                                                    (type: string) => (
                                                        <div
                                                            key={
                                                                format +
                                                                pokemon.name +
                                                                type
                                                            }
                                                            className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                                        >
                                                            {type}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </CardBody>
                                        <CardFooter className="px-[10px] pt-4 pb-[14px]">
                                            <Button className="w-full bg-[#373737] hover:bg-[#FFCB05] text-white hover:text-[#373737] font-bold hover:outline-4 hover:outline-[#F8F1D8] hover:outline-offset-0">
                                                <Link
                                                    href={`/pokemon-detail/${pokemon.name}`}
                                                    className="flex justify-center text-inherit w-full h-full"
                                                >
                                                    Detail
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-[18px]">
                            {pokemonList &&
                                pokemonList.map((pokemon: any) => (
                                    <Card
                                        key={format + pokemon?.name}
                                        className="flex-row rounded-lg max-w-full min-h-[108px] p-[14px] bg-white"
                                    >
                                        <Image
                                            width={80}
                                            height={80}
                                            src={pokemon?.image}
                                            fallbackSrc="https://via.placeholder.com/80x80"
                                            alt="Pokemon"
                                            radius="none"
                                            className="min-w-20"
                                        />
                                        <CardBody className="flex flex-col items-start gap-2 ml-[14px] py-0">
                                            <p className="text-base font-bold">
                                                {pokemon?.name}
                                            </p>
                                            <div className="flex gap-1">
                                                {pokemon?.types.map(
                                                    (type: string) => (
                                                        <div
                                                            key={
                                                                format +
                                                                pokemon?.name +
                                                                type
                                                            }
                                                            className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                                        >
                                                            {type}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <p className="text-xs font-light text-[#666666]">
                                                Abilities:{" "}
                                                {pokemon?.abilities.join(", ")}
                                            </p>
                                        </CardBody>
                                        <CardFooter className="justify-end ml-auto w-fit">
                                            <Button className="w-[230px] bg-[#373737] hover:bg-[#FFCB05] text-white hover:text-[#373737] font-bold hover:outline-4 hover:outline-[#F8F1D8] hover:outline-offset-0">
                                                <Link
                                                    href={`/pokemon-detail/${pokemon.name}`}
                                                    className="flex justify-center text-inherit w-full h-full"
                                                >
                                                    Detail
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    )}
                    <div className="flex justify-center py-8">
                        <Pagination totalPages={totalPages} />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center text-base text-[#909090]">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M14.9849 14.9852L20.1408 20.1412"
                                stroke="#373737"
                                strokeWidth="2.1875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.9851 20.1412L20.1411 14.9852"
                                stroke="#373737"
                                strokeWidth="2.1875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <path
                            d="M17.2707 31.125C24.9221 31.125 31.1248 24.9222 31.1248 17.2708C31.1248 9.61935 24.9221 3.41663 17.2707 3.41663C9.61923 3.41663 3.4165 9.61935 3.4165 17.2708C3.4165 24.9222 9.61923 31.125 17.2707 31.125Z"
                            stroke="#373737"
                            strokeWidth="2.1875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            opacity="0.4"
                            d="M32.5832 32.5833L29.6665 29.6666"
                            stroke="#373737"
                            strokeWidth="2.1875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="mt-4">{`Oops! Nothing was found for “ ${query} ”`}</div>
                    <div>Please try to search for something else.</div>
                </div>
            )}
        </div>
    );
}
