import Head from 'next/head'
import { TextLink } from '../components/ui'

const About = () => {
    return (
        <>
            <Head>
                <title>Michael Chen | About</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="text-5xl font-semibold">About Me</h1>
                    <div className="flex flex-row mt-2">
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
                    <section >
                        <p className="text-lg mt-6">
                            I am a high school student from Raffles Institution in Singapore.
                            I spend most of my time building web apps, implementing ML models, and
                            reading about statistics.
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">What I'm Doing Now</h2>
                        <p className="text-lg mt-4">
                            As a business data science research intern at New Jersey Institute of Technology,
                            I am part of a research team studying {' '}
                            <TextLink to="https://en.wikipedia.org/wiki/Ad_blocking">ad-blocking</TextLink> {' '}
                            from a publisher's perspective.
                        </p>
                        <p className="text-lg mt-2">
                            I am starting a personal project to help developers find code buddies, mentors or mentees.
                            Also, I will be regularly writing blog posts here.
                        </p>
                        <p className="text-base mt-2">
                            *Notice how schoolwork isn't mentioned here.
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">Past Experiences</h2>
                        <p className="text-lg mt-4">
                            Previously, I was a data science intern at <TextLink to="https://www.aisingapore.org/">AI Singapore</TextLink>,
                            which is a large non-profit for supporting AI development in Singapore.
                            I worked on an open-source analytics web app called <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">MenuCarlo</TextLink>.
                            MenuCarlo helps F&B owners optimize their menu using their historical transactions data.
                        </p>
                        <p className="text-lg mt-2">
                            I was also a data science intern at <TextLink to="https://www.psioninsights.com/">Psion Insights</TextLink>,
                            a risk management startup based in Singapore. I built a chatbot for logging risk-related issues,
                            which uses NLP classification to categorize newly added issues.
                        </p>
                    </section>
                    <section >
                        <h2 className="text-3xl font-semibold mt-6">Other Interests</h2>
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
