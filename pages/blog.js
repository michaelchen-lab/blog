import Head from 'next/head'
import Link from 'next/link'

import { Date } from '../components/ui'
import { getSortedPostsData } from '../utils/posts'

const Blog = ({ allPostsData }) => {
    return (
        <>
            <Head>
                <title>Blog | Michael Chen</title>
                <meta name="description" content="A blog for web development, data science and econometrics, amongst other things." />
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="font-serif text-5xl mb-8 font-semibold">Blog</h1>
                    {allPostsData.map(({ id, date, title, description }) => (
                        <div className="mb-8" key={id}>
                            <Link href={`/blog/${id}`}>
                                <div className="cursor-pointer">
                                    <h2 className="text-2xl font-semibold cursor-pointer">{title}</h2>
                                    <p className="text-lg text-base leading-normal text-gray-600 mt-2">{description}</p>
                                </div>
                            </Link>
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
