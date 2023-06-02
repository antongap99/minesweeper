import { createContext, useState, ReactNode } from "react";
import { TIME } from "../const/const";

interface ITabloContext {
    time: number,
    setTime?: (time: number) => void
}

interface Props {
    children: ReactNode
}

export const TabloContext = createContext<ITabloContext>({ time: TIME });


export const TabloContextProvider = ({ children }: Props): JSX.Element => {
    const [time, setTime] = useState<number>(TIME)

    return (
        <TabloContext.Provider value={{ time, setTime }}>
            {children}
        </TabloContext.Provider>
    )
}