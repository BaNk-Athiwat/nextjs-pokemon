'use client'

import { createContext, useContext, useState } from "react";

const pocketList = [
    {
        name: "bulbasaur555",
        types: ["grass", "poison"],
        abilities: ["overgrow", "chlorophyll"],
        stats: [
            "hp",
            "attack",
            "defense",
            "special-attack",
            "special-defense",
            "speed",
        ],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "bulbasaur",
        types: ["grass", "poison"],
        abilities: ["overgrow", "chlorophyll"],
        stats: [
            "hp",
            "attack",
            "defense",
            "special-attack",
            "special-defense",
            "speed",
        ],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
];

const AppContext = createContext<any>(undefined);

export function AppWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    let [pocketList, setPocketList] = useState([]);

    return(
        <AppContext.Provider value={{
            pocketList,
            setPocketList
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}