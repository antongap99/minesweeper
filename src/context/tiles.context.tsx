import { createContext, useState, ReactNode, FC } from "react";
import { createAndshuffleTiles, ShuffleTiles } from "../components/Game/GameWindow/GameSquare/tilesControl";



export interface ITilesContext {
    tiles: ShuffleTiles
    setNewTiles?: (newTiles: ShuffleTiles) => void;
    isFirstPick:boolean;
    setIsFirstPick?: (newTiles: boolean) => void;
    isBombsShows: boolean;
    setBombsShows?: (isShow: boolean) => void;

}



export const WIDTH: number = 16;
export const HEIGHT: number = 16;
export const BOMBS: number = 40;


export const TilesContext = createContext<ITilesContext>({
    tiles: createAndshuffleTiles(WIDTH, HEIGHT, BOMBS, false),
    isFirstPick: false,
    isBombsShows:false,
});

type ProviderProps = {
    children: ReactNode
    isGameOver:boolean
}

export const TilesContextProvider: FC<ProviderProps> = ({ children, isGameOver }: ProviderProps) => {
    const [tiles, setTiles] = useState<ShuffleTiles>(createAndshuffleTiles(WIDTH, HEIGHT, BOMBS, isGameOver))
    const [isFirstPick, setIsFirstPick] = useState<boolean>(true);
    const [isBombsShows, setBombsShows] = useState<boolean>(false);
    // const [open, setOpen] = useState<boolean>(false)

    const setNewTiles = (newTiles: ShuffleTiles) => {
        setTiles(newTiles);
    }

    return (
        <TilesContext.Provider value={{
            tiles, setNewTiles, isFirstPick, setIsFirstPick, isBombsShows, setBombsShows  }}>
            {children}
        </TilesContext.Provider>
    )
}