import { useState } from 'react'

import '../styles/globals.css'
import '../styles/hljsTheme.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="">
                <header className="container mx-auto max-w-7xl">
                    <div className="flex pt-6 pb-4 px-6 border-b">
                        <Link href="/">
                            <a className="font-mono text-xl md:text-xl lg:text-2xl" style={{color: '#00F'}}>
                                &#60;MichaelChen /&#62;
                            </a>
                        </Link>
                        <DesktopNav />
                        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </header>
                <main>{children}</main>
            </div>
        </>
    )
}

const DesktopNav = () => {
    return (
        <div className="items-center hidden ml-auto md:flex">
            <DesktopNavItem to="/blog" name="Blog" />
            <DesktopNavItem to="/projects" name="Projects" />
            <DesktopNavItem to="/about" name="About" />
        </div>
    )
}

const DesktopNavItem = ({to, name}) => {
    return (
        <Link href={to}>
            <a className="text-sm md:text-base lg:text-lg px-6 text-gray-600 hover:text-black">
                {name}
            </a>
        </Link>
    )
}

const MobileNav = ({ isOpen, setIsOpen }) => {
    return (
        <button
            className="ml-auto md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            { isOpen ? (
                // Change to 'close' icon in future
                <svg fill="currentColor" viewBox="0 0 20 20" className="block w-4 h-4">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            ) : (
                <svg fill="currentColor" viewBox="0 0 20 20" className="block w-4 h-4">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            )}
        </button>
    )
}

const MobileNavMenu = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return <h1></h1>

    return (
        <div className="fixed z-10 flex flex-col items-center min-h-screen min-w-full bg-white bg-opacity-70 md:hidden border-b-2 border-gray-500"
            onClick={() => setIsOpen(false)}>
                <MobileNavItem to="/blog" name="Blog" />
                <MobileNavItem to="/projects" name="Projects" />
                <MobileNavItem to="/about" name="About" />
        </div>
    )
}

const MobileNavItem = ({ to, name }) => {
    return (
        <Link href={to}>
            <div className="bg-white min-w-full text-center py-2 border-b">
                <a className="text-sm text-gray-600">{name}</a>
            </div>
        </Link>
    )
}
