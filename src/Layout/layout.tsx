import { FC, ReactNode } from "react"
import style from './layout.module.css'

interface LayoutProps {
    children: ReactNode
}


export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}


export const WithLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {

    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}