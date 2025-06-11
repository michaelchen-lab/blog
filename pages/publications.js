import Head from 'next/head'
import Link from 'next/link'
import { TextLink, SectionTitle } from '../components/ui'

const Publications = () => {
    return (
        <>
            <Head>
                <title>Publications | Michael Chen</title>
            </Head>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <h1 className="font-serif text-5xl font-semibold">Publications</h1>
                    <p className='text-sm italic'>*Equal contribution</p>
                    <section className="mt-8">
                        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
                            <img className="col-span-1 mb-8" src="caft.png" alt="caft-graphic"/>
                            <div className='col-span-2'>
                                <h1 className='text-lg leading-5 font-bold mb-2'>Improving large language models with concept-aware fine-tuning</h1>
                                <p><span className='font-bold'>Michael K. Chen</span>, Xikun Zhang, Jiaxing Huang, Dacheng Tao</p>
                                <p className='italic text-sm'>Preprint</p>
                                <p className="mt-2">
                                    <TextLink to="https://www.arxiv.org/abs/2506.07833">Paper</TextLink> · {' '}
                                    <TextLink to="https://github.com/michaelchen-lab/caft-llm">Github</TextLink>
                                </p>
                            </div>
                            <img className="col-span-1 mb-8" src="justlogic.png" alt="justlogic-graphic"/>
                            <div className='col-span-2'>
                                <h1 className='text-lg leading-5 font-bold mb-2'>JustLogic: A Comprehensive Benchmark for Evaluating Deductive Reasoning in Large Language Models</h1>
                                <p><span className='font-bold'>Michael K. Chen</span>, Xikun Zhang, Dacheng Tao</p>
                                <p className='italic text-sm'>Preprint</p>
                                <p className="mt-2">
                                    <TextLink to="https://arxiv.org/abs/2501.14851">Paper</TextLink> · {' '}
                                    <TextLink to="https://github.com/michaelchen-lab/JustLogic">Github</TextLink>
                                </p>
                            </div>
                            <img className="col-span-1 mb-8" src="dss-paper.jpg" alt="dss-graphic"/>
                            <div className='col-span-2'>
                                <h1 className='text-lg leading-5 font-bold mb-2'>A Field Study on the Impact of the Counter Ad-Blocking Wall Strategy on User Engagement</h1>
                                <p><span className='font-bold'>Michael K. Chen</span>, Shuai Zhao, Christian Borcea, Yi Chen</p>
                                <p className='italic text-sm'>Under review at Decision Support Systems</p>
                            </div>
                            <img className="col-span-1" src="tkde-paper-1.png" alt="tkde-paper-graphic"/>
                            <div className='col-span-2'>
                                <h1 className='text-lg leading-5 font-bold mb-2'>Personalized Dynamic Counter Ad-Blocking Using Deep Learning</h1>
                                <p>Shuai Zhao, <span className='font-bold'>Michael K. Chen</span>, Christian Borcea, Yi Chen</p>
                                <p className='italic text-sm'>Published in IEEE Transactions on Knowledge and Data Engineering</p>
                                <p className="mt-2">
                                    <TextLink to="/tkde-paper-1.pdf">Paper</TextLink> · {' '}
                                    <TextLink to="https://github.com/michaelchen-lab/NJIT-DAWN">Github</TextLink>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container mx-auto max-w-3xl mt-12 px-4">
                    <h1 className="text-2xl font-semibold">Works In Progress</h1>
                    <section className="mt-8">
                        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
                            <img className="col-span-1 mb-8" src="medreason-rx.png" alt="medreason-rx-graphic"/>
                            <div className='col-span-2'>
                                <h1 className='text-lg leading-5 font-bold mb-2'>MedReason-Dx: Benchmarking Step-by-Step Reasoning of Language Models in Medical Diagnosis</h1>
                                <p>MedReason-Dx Team</p>
                                <p className='italic text-sm'>Preprint</p>
                                <p className="mt-2">
                                    <TextLink to="https://imzhangxikun.github.io/MedReasonDx_Benchmarking_Step_by_Step_Reasoning_of_Language_Models_in_Medical_Diagnosis/">Website</TextLink> · {' '}
                                    <TextLink to="https://github.com/imZHANGxikun/MedReasonDx_Benchmarking_Step_by_Step_Reasoning_of_Language_Models_in_Medical_Diagnosis?tab=readme-ov-file">Github</TextLink>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="mt-10">
            </footer>
        </>
    )
}

export default Publications