import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const TextLink = ({to, children}) => {
    return (
        <Link href={to}>
            <a className="text-blue-500 hover:underline">{children}</a>
        </Link>
    )
}

const Date = ({ dateString }) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export { TextLink, Date }
