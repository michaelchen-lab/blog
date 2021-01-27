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
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <article>
                        <h1 className="text-4xl">{postData.title}</h1>
                        <a className="text-lg text-gray-600">
                            <Date dateString={postData.date} />
                        </a>
                        <div className={styles.unreset}>
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
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}

export { getStaticPaths, getStaticProps }

const Content = ({content}) => {
    // Convert internal links from <a> to next/link
    return (
        <>
            { parse(content, {
                replace: ({attribs, name, children}) => {
                    if (!attribs) { return }

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
                }
            })}
        </>
    )
}
