import { createContext, useState, ReactNode, FC } from "react";
import { BOMBS, HEIGHT, WIDTH } from "../const/const";
import {  createShuffledTiles } from '../service/gameContol';
import { IShuffledTiles } from '../service/interfaces';


export interface ITilesContext {
    tiles: IShuffledTiles
    setNewTiles?: (newTiles: IShuffledTiles) => void;
    isBombsShows: boolean;
    setBombsShows?: (isShow: boolean) => void;
}


export const TilesContext = createContext<ITilesContext>({
    tiles: createShuffledTiles(WIDTH, HEIGHT, BOMBS, false),
    isBombsShows:false,
});

type ProviderProps = {
    children: ReactNode
    isGameOver:boolean
}

export const TilesContextProvider: FC<ProviderProps> = ({ children, isGameOver }: ProviderProps) => {
    const [tiles, setTiles] = useState<IShuffledTiles>(createShuffledTiles(WIDTH, HEIGHT, BOMBS, isGameOver))
    const [isBombsShows, setBombsShows] = useState<boolean>(false);

    const setNewTiles = (newTiles: IShuffledTiles) => {
        setTiles(newTiles);
    }

    return (
        <TilesContext.Provider value={{
            tiles, setNewTiles, isBombsShows, setBombsShows  }}>
            {children}
        </TilesContext.Provider>
    )
}