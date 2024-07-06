"use client";

import { useAppContext } from "@/context";
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Image,
} from "@nextui-org/react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Detail() {
    const params = useParams<{ name: string }>();
    const name = params?.name!;
    
    const { setPocketList } = useAppContext();

    const [pokemon, setPokemon] = useState<any>();
    const [value, setValue] = useState(1);

    useEffect(() => {
        async function getPokemon() {
            const data = await fetchPokemonByName(name);
            console.log(data);
            
            setPokemon(data);
        }
        if (name) {
            getPokemon();
        }
    }, [name]);

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
                stats: pokemon.stats.map((stat: any) => stat?.stat.name),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            };

            return detailedPokemon;
        } catch (error) {
            console.log(error);
        }
    };

    const handleDecrement = () => {
        setValue(value !== 1 ? value - 1 : 1);
    };

    const handleIncrement = () => {
        setValue(value !== 10 ? value + 1 : 10);
    };

    const handleAddToPocket = () => {
        const pocketList = [];
        pocketList.push(pokemon);
        
        setPocketList(pocketList);
    }

    return (
        <div className="w-full min-h-[385px] bg-white self-center mt-6">
            {pokemon && (
                <Card className="flex flex-row gap-[100px] px-[14px] py-4">
                    <Image
                        width={353}
                        height={353}
                        src={pokemon?.image}
                        fallbackSrc="https://via.placeholder.com/353x353"
                        alt="Pokemon"
                        radius="none"
                        className="min-w-[353px]"
                    />
                    <CardBody>
                        <div className="flex flex-col gap-[14px]">
                            <p className="text-base font-bold">
                                {pokemon?.name}
                            </p>
                            <div className="flex gap-1">
                                {pokemon?.types.map((type: string) => (
                                    <div
                                        key={pokemon?.name + type}
                                        className="flex items-center rounded-lg h-6 px-2 py-1 bg-[#FFF4E3] text-xs text-[#FFAE33] font-bold"
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                            <p className="relative text-[14px] font-light text-[#666666]">
                                Stats:{" "}
                                <span className="absolute left-20">
                                    {pokemon?.stats.join(", ")}
                                </span>
                            </p>
                            <p className="relative text-[14px] font-light text-[#666666]">
                                Abilities:{" "}
                                <span className="absolute left-20">
                                    {pokemon?.abilities.join(", ")}
                                </span>
                            </p>
                            <div className="flex justify-start items-center">
                                <span className="text-sm mr-[60px]">
                                    Quantitiy:
                                </span>
                                <ButtonGroup className="border border-[#373737] rounded-xl w-fit h-full">
                                    <Button
                                        className="bg-white border-0 rounded-none text-lg font-medium min-w-10 p-0"
                                        onPress={handleDecrement}
                                    >
                                        -
                                    </Button>
                                    <div className="flex justify-center items-center w-12 h-full bg-[#F5F5F5]">
                                        {value}
                                    </div>
                                    <Button
                                        className="bg-white border-0 rounded-none text-lg font-medium min-w-10 p-0"
                                        onPress={handleIncrement}
                                    >
                                        +
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <Button
                                size={"lg"}
                                className="w-[254px] text-sm font-semibold text-[#F9F9F9] bg-[#FF6F61]"
                                onPress={() => handleAddToPocket()}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.625 5.75238V5.02488C5.625 3.33738 6.9825 1.67988 8.67 1.52238C10.68 1.32738 12.375 2.90988 12.375 4.88238V5.91738"
                                        stroke="white"
                                        strokeWidth="1.125"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.75011 16.5H11.2501C14.2651 16.5 14.8051 15.2925 14.9626 13.8225L15.5251 9.3225C15.7276 7.4925 15.2026 6 12.0001 6H6.00011C2.79761 6 2.27261 7.4925 2.47511 9.3225L3.03761 13.8225C3.19511 15.2925 3.73511 16.5 6.75011 16.5Z"
                                        stroke="white"
                                        strokeWidth="1.125"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.6219 9H11.6286"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.37088 9H6.37762"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Add to pocket
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
}
