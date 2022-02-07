import Head from 'next/head'
import Link from 'next/link'
import { TextLink, BioLinks } from '../components/ui'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Michael Chen</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="font-serif text-5xl font-semibold">About Me</h1>
                    <div className="mt-4">
                        <BioLinks />
                    </div>
                    <section >
                        <p className="text-lg mt-6">
                            Hey there! I am a high school student (JC2) from Raffles Institution in Singapore.
                            Most people know me as the young tech guy working in the education space.
                        </p>
                        <p className="text-lg mt-2">
                            The pre-tertiary education system no longer prepares youths well enough to face
                            tomorrow's challenges. I started a publication to discuss just this. And online learning
                            is still riddled with problems. My mission is to make education better and more accessible.
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">What I'm Doing Now</h2>
                        <p className="text-lg mt-4">
                            I spend most of my time working on <TextLink to="https://www.roadmaple.com">RoadMaple</TextLink> and <TextLink to="https://www.echoclass.com">EchoClass</TextLink>.
                            RoadMaple is an online learning platform to help youths figure out the best way to learn a skill.
                            EchoClass is an online classroom tool for teachers to track student progress during lessons
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">What I Have Done</h2>

                        <p className="text-lg mt-4">
                            I was research intern at a business data science research group in New Jersey Institute of Technology.
                            I co-authored 2 papers on the impact of <TextLink to="/blog/why-adblocking-is-so-problematic">ad-blocking</TextLink> {' '}
                            on publishers and readers, and how publishers can best deal with ad-blocker users.
                            Both are under review.
                        </p>

                        <p className="text-lg mt-4">
                            I was a data science intern at <TextLink to="https://www.aisingapore.org/">AI Singapore</TextLink>,
                            a large non-profit for supporting AI development in Singapore. During my time there, I worked towards
                            bringing data science into the F&B industry.
                        </p>
                        <p className="text-lg mt-2">
                            I was also a data science intern at <TextLink to="https://www.psioninsights.com/">Psion Insights</TextLink>,
                            a risk management startup. Our team's mission was to solve the inefficiencies of issue reporting with
                            software development and machine learning.
                        </p>
                        <p className="text-lg mt-2">
                            During my free time, I work on personal projects to expand my skillset and tackle problems
                            faced by people around me. Find out more about my projects <TextLink to="/projects">here</TextLink>.
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">Other Things I Enjoy</h2>
                        <p className="text-lg mt-4">
                            I read about philosophy, economic history and cliodynamics. When I'm procrastinating,
                            I watch anime and play chess. But honestly, nothing beats sleeping.
                        </p>
                    </section>
                </div>
            </main>
            <footer className="mt-10">
            </footer>
        </>
    )
}

export default About
