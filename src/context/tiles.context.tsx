import { createContext, useState, ReactNode, FC } from "react";
import { createShuffledTiles, ShuffleTiles } from "../components/Game/GameWindow/GameSquare/tilesControl";
import { BOMBS, HEIGHT, WIDTH } from "../const/const";



export interface ITilesContext {
    tiles: ShuffleTiles
    setNewTiles?: (newTiles: ShuffleTiles) => void;
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
    const [tiles, setTiles] = useState<ShuffleTiles>(createShuffledTiles(WIDTH, HEIGHT, BOMBS, isGameOver))

    const [isBombsShows, setBombsShows] = useState<boolean>(false);
    // const [open, setOpen] = useState<boolean>(false)

    const setNewTiles = (newTiles: ShuffleTiles) => {
        setTiles(newTiles);
    }

    return (
        <TilesContext.Provider value={{
            tiles, setNewTiles, isBombsShows, setBombsShows  }}>
            {children}
        </TilesContext.Provider>
    )
}