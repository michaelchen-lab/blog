import styles from '../../styles/unreset.module.css'

import Head from 'next/head'
import Link from 'next/link'
import { getAllPostTitles, getPostData } from '../../utils/posts'
import { Date } from '../../components/ui'

import parse, { domToReact } from 'html-react-parser'

const Post = ({postData}) => {
    return (
        <>
            <Head>
                <title>{postData.title} | Michael Chen</title>

                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={postData.image} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@michaelchenkj" />
                <meta name="twitter:creator" content="@michaelchenkj" />
                <meta name="twitter:image" content={'https://michaelchen.io'+postData.image.slice(7)} />
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <article>
                        <h1 className="font-bold text-2xl sm:text-4xl mb-2">{postData.title}</h1>
                        <a className="text-lg text-gray-600">
                            <Date dateString={postData.date} />
                        </a>
                        <div className={styles.unreset + ' text-base sm:text-lg'}>
                            <Content content={postData.contentHTML} />
                        </div>
                    </article>

                    <footer>
                        <Link href="/blog">
                            <p className="font-semibold text-blue-500 pb-10 cursor-pointer">&lt;&lt; View all posts</p>
                        </Link>
                    </footer>
                </div>
            </main>
        </>
    )
}

export default Post

const getStaticPaths = async () => {
    const paths = getAllPostTitles()

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.title)
    return {
        props: {
            postData
        }
    }
}

export { getStaticPaths, getStaticProps }

const Content = ({content}) => {

    // Edit unreset.module.css for some default stylings

    return (
        <>
            { parse(content, {
                replace: ({attribs, name, children}) => {
                    if (!attribs) { return }

                    // Convert internal links from <a> to next/link
                    if ('href' in attribs && name === 'a') {
                        if (!(attribs.href.includes('http'))) {
                            return (
                                <Link href={attribs.href}>
                                    { domToReact(children) }
                                </Link>
                            )
                        } else {
                            return
                        }
                    }

                    // Add styling to blockquote
                    if (name === 'blockquote') {
                        return (
                            <blockquote className="italic border-l-4 border-gray-500 pl-4">
                                { domToReact(children) }
                            </blockquote>
                        )
                    }
                }
            })}
        </>
    )
}
