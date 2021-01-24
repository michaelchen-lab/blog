import Head from 'next/head'
import Link from 'next/link'

import { TextLink } from '../components/ui'

const Home = () => {
    return (
        <>
            <Head>
                <title>Michael Chen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        <div className="col-span-1 md:col-span-4">
                            <h1 className="text-5xl font-semibold">Hello!</h1>
                            <p className="text-lg md:text-xl text-gray-600 mt-8">
                                I'm Michael Chen, currently a high school student from Singapore.
                                My goal is to build solutions for people with web development
                                and data science.
                            </p>

                            <div className="flex flex-row mt-8">
                                <div className="mr-6">
                                    <a
                                        className="flex items-center text-gray-600 font-semibold"
                                        href="https://github.com/michaelchen-lab"
                                    >
                                        <img className="h-4 mr-2" src="/github-icon.svg"/>
                                        <span>Github</span>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="flex items-center text-gray-600 font-semibold"
                                        href="https://www.linkedin.com/in/michael-chen-kj/"
                                    >
                                        <img className="h-4 mr-2" src="/linkedin-icon.svg"/>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 mx-auto">
                            <img
                                src="/avatar.png"
                                alt="Michael's Avatar"
                            />
                        </div>

                        <Section>
                            <SectionTitle to="/projects" name="Projects" />
                            <SectionDescription>
                                I am currently working on the very website you are reading right now.
                                I intend to start working on CodeTinder, a platform that helps developers
                                find code buddies, mentors or mentees.
                            </SectionDescription>
                        </Section>
                        <Section>
                            <SectionTitle to="/blog" name="Blog" />
                            <SectionDescription>
                                I write about web development, data science and econometrics, amongst
                                other things. You can read my writing <TextLink to="/blog">here</TextLink>.
                            </SectionDescription>
                        </Section>
                        <Section>
                            <SectionTitle to="/about" name="About" />
                            <SectionDescription>
                                You can find out more about me and my life in my <TextLink to="/about">bio</TextLink>.
                                Feel free to reach out via <TextLink to="https://www.linkedin.com/in/michael-chen-kj/">LinkedIn</TextLink> {''}
                                or <TextLink to="mailto:michaelchenkaijie2004@gmail.com">email</TextLink>.
                            </SectionDescription>
                        </Section>
                    </div>
                </div>
            </main>

            <footer>
            </footer>
        </>
    )
}

export default Home

const Section = ({ children }) => {
    return (
        <div className="col-span-1 md:col-span-3 md:pt-10">
            { children }
        </div>
    )
}

const SectionTitle = ({ to, name }) => {
    return (
        <Link href={to}>
            <h2 className="text-3xl font-semibold pb-4 cursor-pointer">{name} ></h2>
        </Link>
    )
}

const SectionDescription = ({ children }) => {
    return (
        <p className="text-base md:text-lg text-justify">
            { children }
        </p>
    )
}
