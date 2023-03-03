import { createContext, useState, ReactNode } from "react";

interface TabloContextType {
    time: number,
    setTime?: (time: number) => void
}

interface Props {
    children: ReactNode
}



export const TabloContext = createContext<TabloContextType>({ time: 40 });

// тип AppContextType & { children: ReactNode } можно заменить на  PropsWithChildren<AppContextType> (mип из реакта)
export const TabloContextProvider = ({ children }: Props): JSX.Element => {

    const [time, setTime] = useState<number>(40)


    return (
        <TabloContext.Provider value={{ time, setTime }}>
            {children}
        </TabloContext.Provider>
    )
}