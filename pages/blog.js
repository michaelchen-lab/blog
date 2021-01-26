import Head from 'next/head'
import Link from 'next/link'

import { Date } from '../components/ui'
import { getSortedPostsData } from '../utils/posts'

const Blog = ({ allPostsData }) => {
    return (
        <>
            <Head>
                <title>Blog | Michael Chen</title>
                <meta name="description" content="Find out about web development, data science and econometrics, amongst other things." />
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="font-serif text-5xl mb-8 font-semibold">Blog</h1>
                    {allPostsData.map(({ id, date, title }) => (
                        <div className="mb-4" key={id}>
                            <Link href={`/blog/${id}`}>
                                <p className=" text-2xl cursor-pointer">{title}</p>
                            </Link>
                            <a className="text-base text-gray-600">
                                <Date dateString={date} />
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Blog

const getStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}

export { getStaticProps }
