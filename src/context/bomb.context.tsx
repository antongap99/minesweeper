import { createContext, useState,  ReactNode } from "react";
import { BOMBS } from "../const/const";


export interface BombsContextType {
    bombs:number,
    setBombs?: (bombs: number) => void
}

interface Props {
    children:ReactNode
}



export const BombsContext = createContext<BombsContextType>({ bombs: BOMBS });

// тип AppContextType & { children: ReactNode } можно заменить на  PropsWithChildren<AppContextType> (mип из реакта)
export const BombsContextProvider = ({ children }: Props): JSX.Element => {

    const [bombs, setBombs] = useState<number>(BOMBS)



    return (
        <BombsContext.Provider value={{ bombs, setBombs }}>
            {children}
        </BombsContext.Provider>
    )
}