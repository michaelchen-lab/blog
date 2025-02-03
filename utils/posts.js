import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import addClasses from 'rehype-class-names'
import remarkMath from 'remark-math'

const postsDirectory = path.join(process.cwd(), 'posts')

const getSortedPostsData = () => {
    let fileNames = fs.readdirSync(postsDirectory)

    fileNames = fileNames.filter(filename => {
        if (filename.includes('md')) {
            return true
        }
        return false
    })

    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get title
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the title
        return {
          id,
          ...matterResult.data
        }
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

const getAllPostTitles = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                title: fileName.replace(/\.md$/, '')
            }
        }
    })
}

const getPostData = async (title) => {
    const fullPath = path.join(postsDirectory, `${title}.md`)
    console.log(fullPath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    // const processedContent = await unified()
    //     .use(parse)
    //     .use(highlight)
    //     .use(html)
    //     .process(matterResult.content)
    // const contentHTML = processedContent.toString()

    const processedContent = await unified()
        .use(remarkParse)  // Parses markdown
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype) // Converts to HTML-compatible format
        .use(rehypeHighlight) // Applies syntax highlighting
        .use(addClasses, {
            thead: 'text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400',
            tr: "odd:text-xl",
            "tr > :first-child": "text-left",
            // "tr:last-child": "font-bold",
            th: "px-4 py-2",
            td: "px-4 py-3",

            "blockquote": "italic border-l-4 border-gray-500 pl-4",
            "blockquote > p": "text-base",

            // "code.language-math": "font-serif bg-transparent"
          })
        .use(rehypeStringify) // Converts to HTML string
        .process(matterResult.content)
    const contentHTML = processedContent.toString()

    // Combine the data with the title
    return {
        title,
        contentHTML,
        ...matterResult.data
    }
}

export { getSortedPostsData, getAllPostTitles, getPostData }
