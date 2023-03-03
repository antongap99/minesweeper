import { createContext, useState, ReactNode, FC } from "react";



export interface IGameContext {
    isGameOver:boolean;
    setIsGameOver?: (bool:boolean) => void
    isGameWin:boolean
    setIsGameWin?: (bool: boolean) => void
}



export const GameContext = createContext<IGameContext>({
    isGameOver: false,
    isGameWin: false
});

type ProviderProps = {
    children: ReactNode
}

export const GameContextProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {

    const [isGameOver, setIsGameOver] = useState<boolean>(false)
    const [isGameWin, setIsGameWin] = useState<boolean>(false)

    return (
        <GameContext.Provider value={{
            isGameOver, setIsGameOver, isGameWin ,setIsGameWin
}}>
            {children}
        </GameContext.Provider>
    )
}