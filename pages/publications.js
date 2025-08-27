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
                <div className="container mx-auto max-w-5xl mt-10 px-4">
                    <h1 className="font-serif text-5xl font-semibold">Publications</h1>
                    <p className='text-sm italic'>*Equal contribution</p>
                    <p className='mt-4'>My current research focus is in machine learning, and more specifically, language models. Previously, I worked in management information systems, with a focus on causal inference for online experimentation.</p>
                    <section className="mt-8">
                        <h1 className="text-2xl font-semibold mb-4">Machine Learning</h1>
                        <div class="grid sm:grid-cols-4 grid-cols-1 gap-6">
                            <PaperCard
                                image="caft.png"
                                title="Improving large language models with concept-aware fine-tuning"
                                authors={<><span className='font-semibold'>Michael K. Chen</span>, Xikun Zhang, Jiaxing Huang, Dacheng Tao</>}
                                venue="Preprint · Under Review"
                                links={[
                                    { label: "Paper", href: "https://www.arxiv.org/abs/2506.07833" },
                                    { label: "Github", href: "https://github.com/michaelchen-lab/caft-llm" },
                                ]}
                            />
                            <PaperCard
                                image="justlogic.png"
                                title="JustLogic: A Comprehensive Benchmark for Evaluating Deductive Reasoning in Large Language Models"
                                authors={<><span className='font-semibold'>Michael K. Chen</span>, Xikun Zhang, Dacheng Tao</>}
                                venue="Preprint · Under Review"
                                links={[
                                    { label: "Paper", href: "https://arxiv.org/abs/2501.14851" },
                                    { label: "Github", href: "https://github.com/michaelchen-lab/JustLogic" },
                                    { label: "Blog Post", href: "/blog/justlogic" },
                                ]}
                            />
                            <PaperCard
                                image="nesy_paper.png"
                                title="A Comparative Study of Neurosymbolic AI Approaches to Interpretable Logical Reasoning"
                                authors={<><span className='font-semibold'>Michael K. Chen</span></>}
                                venue="19th Conference on Neurosymbolic Learning and Reasoning (NeSy 2025)"
                                links={[
                                    { label: "Paper", href: "https://www.arxiv.org/abs/2508.03366" },
                                ]}
                            />
                            <PaperCard
                                image="iccv_mmreason.png"
                                title="MMReason: An Open-Ended Multi-Modal Multi-Step Reasoning Benchmark for MLLMs Toward AGI"
                                authors={<>Huanjin Yao, Jiaxing Huang, Yawen Qiu, <span className='font-semibold'>Michael K. Chen</span>...<span className='italic'>(7 others)</span>..Dacheng Tao</>}
                                venue="International Conference on Computer Vision (ICCV 2025)"
                                links={[
                                    { label: "Paper", href: "https://arxiv.org/abs/2506.23563" },
                                    { label: "Github", href: "https://github.com/HJYao00/MMReason" },
                                ]}
                            />
                        </div>

                        <h1 className="text-2xl font-semibold mt-8 mb-4">Information Systems</h1>
                        <div class="grid sm:grid-cols-4 grid-cols-1 gap-6">
                            <PaperCard
                                image="dss-paper.jpg"
                                title="A Field Study on the Impact of the Counter Ad-Blocking Wall Strategy on User Engagement"
                                authors={<><span className='font-semibold'>Michael K. Chen</span>, Shuai Zhao, Christian Borcea, Yi Chen</>}
                                venue="Decision Support Systems (In Press)"
                                links={[
                                    { label: "Blog Post", href: "/blog/why-adblocking-is-so-problematic" },
                                ]}
                            />
                            <PaperCard
                                image="tkde-paper-1.png"
                                title="Personalized Dynamic Counter Ad-Blocking Using Deep Learning"
                                authors={<>Shuai Zhao, <span className='font-semibold'>Michael K. Chen</span>, Christian Borcea, Yi Chen</>}
                                venue="IEEE Transactions on Knowledge and Data Engineering"
                                links={[
                                    { label: "Paper", href: "/tkde-paper-1.pdf" },
                                    { label: "Github", href: "https://github.com/michaelchen-lab/NJIT-DAWN" },
                                ]}
                            />
                        </div>
                    </section>
                </div>
                <div className="container mx-auto max-w-5xl mt-12 px-4">
                    <h1 className="text-2xl font-semibold">Works In Progress</h1>
                    <section className="mt-4">
                        <div class="grid sm:grid-cols-4 grid-cols-1 gap-6">
                            <PaperCard
                                image="medreason-rx.png"
                                title="MedReason-Dx: Benchmarking Step-by-Step Reasoning of Language Models in Medical Diagnosis"
                                authors="MedReason-Dx Team"
                                venue="Preprint"
                                links={[
                                    { label: "Website", href: "https://imzhangxikun.github.io/MedReasonDx_Benchmarking_Step_by_Step_Reasoning_of_Language_Models_in_Medical_Diagnosis" },
                                    { label: "Github", href: "https://github.com/imZHANGxikun/MedReasonDx_Benchmarking_Step_by_Step_Reasoning_of_Language_Models_in_Medical_Diagnosis?tab=readme-ov-file" },
                                ]}
                            />
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

const PaperCard = ({ image, title, authors, venue, links }) => {
  return (
    <>
      <div className="mt-2 sm:mt-0 col-span-1 relative overflow-hidden rounded-lg shadow h-40 md:h-full">
        <img
        src={image}
        alt={`${title} graphic`}
        className="absolute inset-0 h-full w-full object-cover"
        />
    </div>
      <div className="sm:col-span-3">
        <h1 className="text-md leading-5 mb-2">{title}</h1>
        <p className="text-sm">{authors}</p>
        <p className="italic text-sm">{venue}</p>
        <p className="mt-2 text-sm">
          {links?.map(({ label, href }, i) => (
            <span key={i}>
              <TextLink to={href}>{label}</TextLink>
              {i < links.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}