import { createContext, useState,  ReactNode } from "react";

export interface BombsContextType {
    bombs:number,
    setBombs?: (bombs: number) => void
}

interface Props {
    children:ReactNode
}



export const BombsContext = createContext<BombsContextType>({bombs: 40});

// тип AppContextType & { children: ReactNode } можно заменить на  PropsWithChildren<AppContextType> (mип из реакта)
export const BombsContextProvider = ({ children }: Props): JSX.Element => {

    const [bombs, setBombs] = useState<number>(40)



    return (
        <BombsContext.Provider value={{ bombs, setBombs }}>
            {children}
        </BombsContext.Provider>
    )
}