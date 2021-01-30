import Head from 'next/head'
import Link from 'next/link'

import { TextLink, Section, SectionTitle, SectionDescription, BioLinks } from '../components/ui'

const Home = () => {
    return (
        <>
            <Head>
                <title>Michael Chen</title>

                <meta property="og:title" content="Michael Chen" />
                <meta property="og:description" content="I'm a high school student from Singapore, who is passionate about solving problems using software development and data science." />
                <meta property="og:url" content="michaelchen.io" />
            </Head>

            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        <div className="col-span-1 md:col-span-4">
                            <h1 className="text-5xl font-semibold">Hello!</h1>
                            <p className="text-lg md:text-xl text-gray-600 mt-6">
                                I'm Michael Chen, a high school student from Singapore.
                                I am passionate about solving problems using software development
                                and data science.
                            </p>

                            <div className="mt-8">
                                <BioLinks />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 mx-auto">
                            <img src="/avatar.png" alt="Michael's Avatar" width="220" height="300"
                            />
                        </div>

                        <Section>
                            <SectionTitle to="/projects" name="Projects" />
                            <SectionDescription>
                                I am part of an academic research team studying the <TextLink to="/blog/why-adblocking-is-so-problematic">problems of ad-blocking</TextLink> {' '}
                                from a publisher's perspective. Also, I am starting a personal project aimed at helping developers find code buddies, mentors and mentees.
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
                                You can find out more about my interests and what I'm doing now in my <TextLink to="/about">bio</TextLink>.
                                Feel free to reach out via <TextLink to="mailto:michaelchenkaijie2004@gmail.com">email</TextLink> {' '}
                                or LinkedIn.
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
