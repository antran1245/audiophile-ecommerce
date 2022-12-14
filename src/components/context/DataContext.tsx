import React, { createContext, ReactNode, useEffect, useState } from "react";
import file from '../../data/data.json'

// entry format of the json file
type ContextInterface = {
        "id": number;
        "slug": string;
        "name": string;
        "image": {
            "mobile": string;
            "tablet": string;
            "desktop": string;
        };
        "category": string;
        "categoryImage": {
            "mobile": string;
            "tablet": string;
            "desktop": string;
        };
        "new": boolean;
        "price": number;
        "description": string;
        "features": string;
        "includes": {"quantity": number, "item": string}[];
        "gallery": {
            [key: string]: {
                "mobile": string;
                "tablet": string;
                "desktop": string;
            }
        };
        "others": {
            "slug": string;
            "name": string;
            "image": {
                "mobile": string;
                "tablet": string;
                "desktop": string;
            };
        }[]
    }[]

// another way to create the interface of file/json file
// type ContextInterface = typeof file

export const Context = createContext<ContextInterface>([])

export default function DataContext({children} : {children: ReactNode}) {
    const [data, setData] = useState<ContextInterface>([])
    useEffect(() => {
        setData(file)
    }, [])
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}