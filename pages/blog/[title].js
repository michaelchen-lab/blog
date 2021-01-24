import Head from 'next/head'
import { getAllPostTitles, getPostData } from '../../utils/posts'
import { Date } from '../../components/ui'

const Post = ({postData}) => {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <article>
                        <h1 className="text-4xl">{postData.title}</h1>
                        <a className="text-lg text-gray-600">
                            <Date dateString={postData.date} />
                        </a>
                        <div className="unreset">
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }}/>
                        </div>
                    </article>

                    <footer>
                        <a href="/blog" className="font-semibold text-blue-500 pb-10">&lt;&lt; View all posts</a>
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
