import Head from 'next/head'
import Link from 'next/link'

import { TextLink, Section, SectionTitle, SectionDescription } from '../components/ui'

const Home = () => {
    return (
        <>
            <Head>
                <title>Michael Chen</title>
            </Head>

            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        <div className="col-span-1 md:col-span-4">
                            <h1 className="font-serif text-5xl font-semibold">Hello!</h1>
                            <p className="text-lg md:text-xl text-gray-600 mt-6">
                                I'm Michael Chen, a high school student from Singapore.
                                I am passionate about solving problems using software development
                                and data science.
                            </p>

                            <div className="flex flex-row mt-8">
                                <div className="mr-6">
                                    <a
                                        className="flex items-center text-gray-600 font-semibold"
                                        href="https://github.com/michaelchen-lab"
                                    >
                                        <img className="h-4 mr-2" src="/github-icon.svg" alt="github" width="20" height="20"/>
                                        <span>Github</span>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="flex items-center text-gray-600 font-semibold"
                                        href="https://www.linkedin.com/in/michael-chen-kj/"
                                    >
                                        <img className="h-4 mr-2" src="/linkedin-icon.svg" alt="linkedin" width="20" height="20"/>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 mx-auto">
                            <img src="/avatar.png" alt="Michael's Avatar" width="220" height="300"
                            />
                        </div>

                        <Section>
                            <SectionTitle to="/projects" name="Projects" />
                            <SectionDescription>
                                I am part of an academic research team studying ad-blocking from a publisher's perspective.
                                Also, I am starting a personal project aimed at helping developers find code buddies, mentors and mentees.
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

            <footer className="pb-10">
            </footer>
        </>
    )
}

export default Home
