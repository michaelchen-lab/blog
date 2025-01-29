import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsMobile(false)
        }
    })

    return (
        <>
            <main>
                <div className="container mx-auto max-w-3xl mt-10 px-4">
                    <div className="w-full">
                        { (!(isMobile)) ? (
                            <Document file="/resume.pdf" renderMode="svg" onLoadError={console.error}>
                                <Page pageNumber={1} width={736} renderAnnotationLayer={false} />
                                <Page pageNumber={2} width={736} renderAnnotationLayer={false} />
                            </Document>
                        ) : (
                            <h1 className="font-serif text-5xl font-semibold mb-10">Resume</h1>
                        )}
                        <div className={`flex ${isMobile ? "justify-left" : "justify-center" }`}>
                            <a className="self-center px-2 py-2 mb-4 bg-gray-500 hover:bg-gray-700 rounded text-white" href="/resume.pdf" download>Download</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Resume
