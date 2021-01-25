import Head from 'next/head'
import Link from 'next/link'
import { TextLink } from '../components/ui'

const Projects = () => {
    return (
        <>
            <Head>
                <title>Michael Chen | Projects</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="text-5xl font-semibold">Projects</h1>
                    <section>
                        <p className="text-lg mt-6">
                            My most recent project is <TextLink to="https://github.com/michaelchen-lab/menucarlo-backend">MenuCarlo</TextLink>, which is done as part of my internship at AISG.
                            MenuCarlo helps F&B owners optimize their menu using their historical transactions data.
                        </p>
                        <p className="text-lg mt-2">
                            Previously, I worked on <TextLink to="https://github.com/michaelchen-lab/fastdash">FastDash</TextLink>, an end-to-end dashboard builder designed for rapid
                            visualization and easy sharing. This is my final project for CS50W.
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
                        <h2 className="text-xl font-semibold">Previous Projects</h2>
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
