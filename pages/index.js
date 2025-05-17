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
                            <p className="text-lg md:text-xl text-gray-800 mt-6">
                                I'm Michael Chen, an incoming undergraduate at UC San Diego.
                                Working on ML research at Stanford and Nanyang Technological University.
                            </p>

                            <div className="mt-6">
                                <BioLinks />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 mx-auto">
                            <img src="/avatar_michael.jpg" alt="Michael's Avatar" width="220" height="300" style={{borderRadius: "50%"}}
                            />
                        </div>

                        <Section>
                            <SectionTitle to="/projects" name="Research" />
                            <SectionDescription>
                                I am working on Large Language Models (LLM), especially in reasoning and novel architecture designs. I also work on causal inference in 
                                management information systems. More details <TextLink to="/publications">here</TextLink>.
                            </SectionDescription>
                        </Section>
                        <Section>
                            <SectionTitle to="/projects" name="Projects" />
                            <SectionDescription>
                                I co-founded <TextLink to="https://www.roadmaple.com">RoadMaple</TextLink>,
                                an edtech company to help youths learn online.
                                I'm also the creator of <TextLink to="https://www.echoclass.com">EchoClass</TextLink>,
                                a classroom tool to help teacher keep track of student progress during lessons.
                            </SectionDescription>
                        </Section>
                        <Section>
                            <SectionTitle to="/blog" name="Blog" />
                            <SectionDescription>
                                I write about education, technology, and productivity, amongst
                                other things that I fancy. Most of my writings are on Medium <TextLink to="https://medium.com/@michaelchenkj">here</TextLink>.
                            </SectionDescription>
                        </Section>
                        <Section>
                            <SectionTitle to="/about" name="About" />
                            <SectionDescription>
                                You can find out more about my interests and what I'm doing now in my <TextLink to="/about">bio</TextLink>.
                                Feel free to reach out via <TextLink to="mailto:hello@michaelchen.io">email</TextLink> {' '}
                                or <TextLink to="https://www.linkedin.com/in/michael-chen-kj/">LinkedIn</TextLink>.
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
