import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

const getSortedPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory)
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
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
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