import { useState, useEffect } from 'react'

import '../styles/globals.css'
import '../styles/hljsTheme.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as gtag from '../utils/gtag'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    console.log(router.pathname)

    return (
        <Layout path={router.pathname}>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                <meta charSet="UTF-8" />
            </Head>
            <div className="">
                <header className="container mx-auto max-w-7xl">
                    <div className="flex px-6 pt-6 pb-4 border-b">
                        <Link href="/">
                            <p className="font-serif text-xl md:text-xl lg:text-2xl">
                                MICHAEL<b>CHEN</b>
                            </p>
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

// <a className="font-mono text-xl md:text-xl lg:text-2xl" style={{color: '#00F'}}>
//     &#60;MichaelChen /&#62;
// </a>

// <img
//     src="/avatar_logo.png" alt="Michael's Avatar"
//     width="70"
// />

const DesktopNav = () => {
    return (
        <div className="items-center hidden ml-auto md:flex">
            <DesktopNavItem to="/publications" name="Publications" />
            <DesktopNavItem to="/blog" name="Blog" />
            <DesktopNavItem to="/projects" name="Projects" />
            <DesktopNavItem to="/about" name="About" />
        </div>
    )
}

const DesktopNavItem = ({to, name}) => {
    return (
        <Link href={to} className="text-sm md:text-base lg:text-lg px-6 text-gray-600 hover:text-black">
                {name}
        </Link>
    )
}

const MobileNav = ({ isOpen, setIsOpen }) => {
    return (
        <button
            className="ml-auto md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="menu"
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
                <MobileNavItem to="/publications" name="Publications" />
                <MobileNavItem to="/blog" name="Blog" />
                <MobileNavItem to="/projects" name="Projects" />
                <MobileNavItem to="/about" name="About" />
        </div>
    )
}

const MobileNavItem = ({ to, name }) => {
    return (
        <Link href={to}>
            <div className="bg-white min-w-full text-center py-4 border-b">
                <p className="text-gray-600 font-medium">{name}</p>
            </div>
        </Link>
    )
}
