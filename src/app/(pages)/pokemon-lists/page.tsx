"use client";

import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
} from "@nextui-org/react";
import { useState } from "react";
import clsx from "clsx";

export default function PokemonListsPage() {
    const [format, setFormat] = useState<string>("grid");
    const pokemonsCount = 12;
    const pokemons = [
        { id: "1", name: "Charizard" },
        { id: "2", name: "Charizard" },
        { id: "3", name: "Charizard" },
        { id: "4", name: "Charizard" },
        { id: "5", name: "Charizard" },
        { id: "6", name: "Charizard" },
        { id: "7", name: "Charizard" },
        { id: "8", name: "Charizard" },
        { id: "9", name: "Charizard" },
        { id: "10", name: "Charizard" },
        { id: "11", name: "Charizard" },
        { id: "12", name: "Charizard" },
    ];
    const types = ["Fire", "Poison"];
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
                        G
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
                        L
                    </Button>
                </ButtonGroup>
            </div>
            {format === "grid" ? (
                <div className="grid grid-cols-4 gap-8 place-items-center">
                    {pokemons &&
                        pokemons.map((pokemon: any) => (
                            <Card
                                key={pokemon.id}
                                className="rounded-lg max-w-[250px] min-h-[378px] bg-[#FAFAFA]"
                            >
                                <Image
                                    width={250}
                                    height={250}
                                    src=""
                                    fallbackSrc="https://via.placeholder.com/250x250"
                                    alt="Pokemon"
                                    radius="none"
                                />
                                <CardBody className="flex flex-col items-start gap-2 px-[10px] pt-[10px] pb-0">
                                    <p className="text-base font-bold">
                                        {pokemon.name}
                                    </p>
                                    <div className="flex gap-1">
                                        {types &&
                                            types.map((type: string) => (
                                                <div
                                                    key={type}
                                                    className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                    </div>
                                </CardBody>
                                <CardFooter className="px-[10px] pt-4 pb-[14px]">
                                    <Button className="w-full bg-[#373737] hover:bg-[#FFCB05] text-white hover:text-[#373737] font-bold hover:outline-4 hover:outline-[#F8F1D8] hover:outline-offset-0">
                                        Detail
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                </div>
            ) : (
                <div className="flex flex-col gap-[18px]">
                    {pokemons &&
                        pokemons.map((pokemon: any) => (
                            <Card
                                key={pokemon.id}
                                className="flex-row rounded-lg max-w-full min-h-[108px] p-[14px] bg-white"
                            >
                                <Image
                                    width={80}
                                    height={80}
                                    src=""
                                    fallbackSrc="https://via.placeholder.com/80x80"
                                    alt="Pokemon"
                                    radius="none"
                                />
                                <CardBody className="flex flex-col items-start gap-2 ml-[14px] py-0">
                                    <p className="text-base font-bold">
                                        {pokemon.name}
                                    </p>
                                    <div className="flex gap-1">
                                        {types &&
                                            types.map((type: string) => (
                                                <div
                                                    key={type}
                                                    className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                    </div>
                                    <p className="text-xs font-light text-[#666666]">
                                        Abilities: Overgrow, Chlorophyll
                                    </p>
                                </CardBody>
                                <CardFooter className="justify-end ml-auto w-fit">
                                    <Button className="w-[230px] bg-[#373737] hover:bg-[#FFCB05] text-white hover:text-[#373737] font-bold hover:outline-4 hover:outline-[#F8F1D8] hover:outline-offset-0">
                                        Detail
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                </div>
            )}
        </div>
    );
}
