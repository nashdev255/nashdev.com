import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
    children?: ReactNode,
    styles?: string,
}

const Layout = ({ children, styles } : Props) => {
    return (
        <div
        className={ clsx('w-full h-full inline-block z-0 bg-light dark:bg-dark p-4 sm:p-12 md:p-16 lg:p-24 xl:p-32', styles) }
        >
            { children }
        </div>
    )
}

export default Layout;
