import { createContext, useState, ReactNode } from "react";
import { TIME } from "../const/const";

interface TabloContextType {
    time: number,
    setTime?: (time: number) => void
}

interface Props {
    children: ReactNode
}



export const TabloContext = createContext<TabloContextType>({ time: TIME });

// тип AppContextType & { children: ReactNode } можно заменить на  PropsWithChildren<AppContextType> (mип из реакта)
export const TabloContextProvider = ({ children }: Props): JSX.Element => {

    const [time, setTime] = useState<number>(TIME)


    return (
        <TabloContext.Provider value={{ time, setTime }}>
            {children}
        </TabloContext.Provider>
    )
}