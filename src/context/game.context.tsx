import { createContext, useState, ReactNode, FC } from "react";



export interface IGameContext {
    isGameOver:boolean;
    setIsGameOver?: (bool:boolean) => void
    isGameWin:boolean
    setIsGameWin?: (bool: boolean) => void
    firstClick:boolean
    setfirstClick?: (bool: boolean) => void
}



export const GameContext = createContext<IGameContext>({
    isGameOver: false,
    isGameWin: false,
    firstClick: true,
});

type ProviderProps = {
    children: ReactNode
}

export const GameContextProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [firstClick, setfirstClick] = useState<boolean>(true)
    const [isGameOver, setIsGameOver] = useState<boolean>(false)
    const [isGameWin, setIsGameWin] = useState<boolean>(false)


    return (
        <GameContext.Provider value={{
            isGameOver, setIsGameOver, isGameWin, setIsGameWin, firstClick, setfirstClick,
}}>
            {children}
        </GameContext.Provider>
    )
}