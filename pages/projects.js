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
                        <div class="flex flex-row">
                                <a
                                    className="flex items-center text-gray-600 font-semibold pb-4 pr-2" 
                                    href="https://roadmaple.com" target="_blank"
                                >
                                        <img src="roadmaple-logo.png" alt="roadmaple-logo" width="40" height="40" />
                                </a>
                                <SectionTitle name="RoadMaple" />
                        </div>
                        <p className="text-lg mt-2">
                            Why do so many people who try to self-learning coding online give up? Surely, it isn't due to a lack of resources;
                            in fact, the problem is the exact opposite: there are too many resources, leading to confusion and cognitive overload.
                        </p>
                        <p className="text-lg mt-2">
                            RoadMaple provides free, simple roadmaps that inform beginners how to learn various skills. A roadmap is a curriculum of 
                            a particular skill, which includes expert recommendations of the most suitable online resources.
                        </p>
                        <p className="text-lg mt-2">
                            Thus far, we have raised 20,000 USD in government funding to develop our project. We have also reached over 4,200 users.
                        </p>
                        <p className="mt-4 mb-8">
                            <TextLink to="https://roadmaple.com">Website</TextLink> · {' '}
                            <TextLink to="https://www.youtube.com/watch?v=cVn-e6C2_kk">Pitch</TextLink>
                        </p>
                        <div class="flex flex-row">
                            <a
                                className="flex items-center text-gray-600 font-semibold pb-4 pr-2" 
                                href="https://www.echoclass.com/" target="_blank"
                            >
                                    <img src="echoclass-logo.png" alt="echoclass-logo" width="40" height="40" />
                            </a>
                            <SectionTitle name="EchoClass" />
                        </div>
                        <p className="text-lg mt-2">
                            Short-term coding courses struggle to find suitable learning management systems (LMS). They are too expensive, too cumbersome,
                            and too complicated.
                        </p>
                        <p className="text-lg mt-2">
                            EchoClass is an easy-to-use LMS that enables teachers to track student progress during lessons and increase engagement.
                        </p>
                        <p className="text-lg mt-2">
                            This project is funded and supported by <TextLink to="https://tinkertanker.com/">Tinkertanker</TextLink>, a prominent code academy in Singapore.
                        </p>
                        <p className="mt-4 mb-8">
                            <TextLink to="https://www.echoclass.com/">Website</TextLink> · {' '}
                            <TextLink to="https://www.youtube.com/watch?v=b8dXJj7T170&ab_channel=MichaelChen">Youtube Demo</TextLink>
                        </p>
                        <div class="flex flex-row">
                            <a
                                className="flex items-center text-gray-600 font-semibold pb-4 pr-2" 
                                href="https://github.com/michaelchen-lab/menucarlo-backend" target="_blank"
                            >
                                    <img src="menucarlo-logo.png" alt="menucarlo-logo" width="30" height="30" />
                            </a>
                            <SectionTitle name="MenuCarlo" />
                        </div>
                        
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
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend#demo">Demo</TextLink> · {' '}
                            <TextLink to="/blog/menucarlo-backend">Backend Architecture</TextLink> · {' '}
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">Source Code</TextLink>
                        </p>
                        <div class="flex flex-row">
                            <a
                                className="flex items-center text-gray-600 font-semibold pb-4 pr-2" 
                                href="https://github.com/michaelchen-lab/fastdash" target="_blank"
                            >
                                    <img src="fastdash-logo.png" alt="fastdash-logo" width="40" height="40" />
                            </a>
                            <SectionTitle name="FastDash" />
                        </div>
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
                            <TextLink to="https://www.youtube.com/watch?v=sZFrC2hdzlY&ab_channel=michaelchen">Demo</TextLink> · {' '}
                            <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">Source Code</TextLink>
                        </p>
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
