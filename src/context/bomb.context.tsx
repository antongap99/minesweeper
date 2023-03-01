import { createContext, useState, PropsWithChildren } from "react";

export interface BombsContextType {
    bombs:number,
    updateSquare?: (bombs: number) => void
}

export const BombsContext = createContext<BombsContextType>({bombs: 40});

// тип AppContextType & { children: ReactNode } можно заменить на  PropsWithChildren<AppContextType> (mип из реакта)
export const BombsContextProvider = ({ children }: PropsWithChildren<BombsContextType>): JSX.Element => {

    const [bombs, setBombs] = useState<number>(40)

    const updateSquare = (bombs:number) => {
        setBombs(bombs)
    }

    return (
        <BombsContext.Provider value={{ bombs, updateSquare }}>
            {children}
        </BombsContext.Provider>
    )
}