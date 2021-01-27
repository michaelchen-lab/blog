import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const TextLink = ({to, children}) => {
    return (
        <>
            { (to.includes('http')) ? (
                // External links: Open in new tab
                <a
                    className="text-blue-700 hover:underline"
                    href={to} target="_blank"
                >{children}</a>
            ) : (
                // Internal links: Open in current tab
                <Link href={to}>
                    <a className="text-blue-700 hover:underline">{children}</a>
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
                <h2 className="text-3xl font-semibold pb-4 cursor-pointer">{name} ></h2>
            </Link>
        )
    } else {
        return <h2 className="text-3xl font-semibold pb-4">{name}</h2>
    }

}

const SectionDescription = ({ children }) => {
    return (
        <p className="text-base md:text-lg text-justify">
            { children }
        </p>
    )
}

export { TextLink, Date, Section, SectionTitle, SectionDescription }
