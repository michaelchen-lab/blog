import Head from 'next/head'
import Link from 'next/link'
import { TextLink, SectionTitle } from '../components/ui'

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Michael Chen</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="font-serif text-5xl font-semibold">Projects</h1>
                    <section className="mt-8">
                        <SectionTitle name="MenuCarlo" />
                        <p className="text-lg mt-2">
                            Data is the new oil. Yet small F&B businesses fail to harness their data's potential
                            due to lack of manpower and expertise. This project aims to
                            empower small businesses by putting the power of data science in their hands.
                        </p>
                        <p className="text-lg mt-2">
                            As part of my internship at <TextLink to="https://www.aisingapore.org/">AI Singapore</TextLink>, we created MenuCarlo,
                            an open-source web app which helps F&B owners optimize their menus by analyzing their past customer transactions.
                        </p>
                        <p className="mt-4 mb-8">
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend#demo">Demo</TextLink> | {' '}
                            <TextLink to="/blog/menucarlo-backend">Backend Architecture</TextLink> | {' '}
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">Source Code</TextLink>
                        </p>
                        <SectionTitle name="FastDash" />
                        <p className="text-lg mt-2">
                            Most people rely on Excel to create dashboards. But sharing with others is cumbersome,
                            since the whole file must be sent via email. And Excel's graph are not visually appealing by default.
                        </p>
                        <p className="text-lg mt-2">
                            As my final project for <TextLink to="https://cs50.harvard.edu/web/2020/">CS50W</TextLink>,
                            I created FastDash,
                            an end-to-end dashboard builder. Dashboards now look good out-of-the-box, and can be shared
                            using just a URL.
                        </p>
                        <p className="mt-4 mb-8">
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">Source Code</TextLink>
                        </p>
                    </section>
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-w-full mt-10 mb-10 px-4 py-4 gap-4">
                            <div className="col-span-1 mx-auto">
                                <a href="https://github.com/michaelchen-lab/menucarlo-backend" target="_blank">
                                    <img className="rounded-full shadow-xl" src="menucarlo-logo.png" alt="menucarlo-logo" width="200" height="200" />
                                </a>
                            </div>
                            <div className="col-span-1 mx-auto">
                                <a href="https://github.com/michaelchen-lab/fastdash" target="_blank">
                                    <img className="shadow-lg" src="fastdash-logo.png" alt="fastdash-logo" width="200" height="200"/>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Other Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center min-w-full mt-2 px-4 py-4 gap-4">
                            <OtherProject name="Personal Site" to="https://github.com/michaelchen-lab/blog" />
                            <OtherProject name="SEAT" to="https://github.com/michaelchen-lab/seat" />
                            <OtherProject name="Pocket Advocate" to="https://github.com/michaelchen-lab/pocket-advocate" />
                        </div>
                    </section>
                </div>
            </main>
            <footer className="mt-10">
            </footer>
        </>
    )
}

export default Projects

const OtherProject = ({ name, to }) => {
    return (
        <a href={to} target="_blank" className="flex justify-center col-span-1 mx-auto w-full py-10 rounded shadow font-medium text-gray-500 hover:text-gray-700">
            {name}
        </a>
    )
}
