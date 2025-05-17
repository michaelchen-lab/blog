import { useState, useEffect } from 'react'

import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const TextLink = ({to, children}) => {
    return (
        <>
            { (to.includes('http')) ? (
                // External links: Open in new tab
                <a
                    className="text-blue-700 hover:underline"
                    href={to}
                >{children}</a>
            ) : (
                // Internal links: Open in current tab
                <Link href={to} className="text-blue-700 hover:underline">
                    {children}
                </Link>
            )}
        </>
    )
}

const Date = ({ dateString }) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

const Section = ({ children }) => {
    return (
        <div className="col-span-1 md:col-span-3 md:pt-4">
            { children }
        </div>
    )
}

const SectionTitle = ({ to, name }) => {
    if (to) {
        return (
            <Link href={to}>
                <h2 className="text-3xl font-semibold pb-4 cursor-pointer">{name}</h2>
            </Link>
        )
    } else {
        return <h2 className="text-3xl font-semibold pb-4">{name}</h2>
    }

}

const SectionDescription = ({ children }) => {
    return (
        <p className="text-base md:text-md text-justify text-gray-700">
            { children }
        </p>
    )
}

const BioLinks = () => {
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsMobile(false)
        }
    })

    return (
        <div className="flex flex-row text-md">
            <div className="mr-6">
                <a
                    className="flex items-center text-gray-600 font-semibold"
                    href="https://www.linkedin.com/in/michael-chen-kj/"
                >
                    <img className="h-6 mr-2" src="/linkedin-icon.svg" alt="linkedin" width="25" height="25"/>
                    <span>LinkedIn</span>
                </a>
            </div>
            <div className="mr-6">
                <a
                    className="flex items-center text-gray-600 font-semibold"
                    href="https://github.com/michaelchen-lab"
                >
                    <img className="h-6 mr-2" src="/github-icon.svg" alt="github" width="25" height="25"/>
                    <span>Github</span>
                </a>
            </div>
            <div>
                { (isMobile) ? (
                    <a
                        className="flex items-center text-gray-600 font-semibold"
                        href="resume.pdf" download
                    >
                        <img className="h-6 mr-2" src="/resume-icon.svg" alt="linkedin" width="25" height="25"/>
                        <span>Resume</span>
                    </a>
                ) : (
                    <Link href="/resume">
                        <div
                            className="flex items-center text-gray-600 font-semibold"
                        >
                            <img className="h-6 mr-2" src="/resume-icon.svg" alt="linkedin" width="25" height="25"/>
                            <span>Resume</span>
                        </div>
                    </Link>
                )}

            </div>
        </div>
    )
}

export { TextLink, Date, Section, SectionTitle, SectionDescription, BioLinks }
