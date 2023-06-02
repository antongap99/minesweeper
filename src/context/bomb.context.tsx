import { createContext, useState,  ReactNode } from "react";
import { BOMBS } from "../const/const";


export interface IBombsContext {
    bombs:number,
    setBombs?: (bombs: number) => void
}

interface Props {
    children:ReactNode
}

export const BombsContext = createContext<IBombsContext>({ bombs: BOMBS });

export const BombsContextProvider = ({ children }: Props): JSX.Element => {
    const [bombs, setBombs] = useState<number>(BOMBS)

    return (
        <BombsContext.Provider value={{ bombs, setBombs }}>
            {children}
        </BombsContext.Provider>
    )
}