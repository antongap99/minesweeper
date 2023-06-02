import { createContext, useState, ReactNode } from "react";

export enum Emojies {
    Smile = 'SMILE',
    Surprice = 'SURPRICE',
    Sed = 'SED',
    Win = 'WIN'
}

interface Props {
    children:ReactNode
}
type UpdateSmileType = (arg: Emojies) => void;

export interface ISmilesContext {
    emoji: Emojies
    setEmoji?: UpdateSmileType
}

export const SmilesContext = createContext<ISmilesContext>({ emoji: Emojies.Smile });

export const SmilesContextProvider = ({ children }: Props): JSX.Element => {

    const [emoji, setEmoji] = useState<Emojies>(Emojies.Smile);
    return (
        <SmilesContext.Provider value={{ emoji, setEmoji }}>
            {children}
        </SmilesContext.Provider>
    )
}