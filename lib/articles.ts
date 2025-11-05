import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'articles')

export interface ArticleMetadata {
  title: string
  category: string
  date: string
  reading_time: string
  author: string
  description: string
}

export interface Article extends ArticleMetadata {
  slug: string
  content: string
}

/**
 * Generate a URL-friendly slug from the article title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

/**
 * Get all articles sorted by date (newest first)
 */
export function getAllArticles(): Article[] {
  // Get all markdown files
  const fileNames = fs.readdirSync(articlesDirectory)
  const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'))

  const articles = markdownFiles.map(fileName => {
    // Read markdown file
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter
    const { data, content } = matter(fileContents)
    const metadata = data as ArticleMetadata

    // Generate slug from title
    const slug = generateSlug(metadata.title)

    return {
      slug,
      content,
      ...metadata,
    }
  })

  // Sort by date (newest first)
  return articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get a single article by its slug
 */
export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles()
  return articles.find(article => article.slug === slug) || null
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const articles = getAllArticles()
  const categories = articles.map(article => article.category)
  return Array.from(new Set(categories))
}

