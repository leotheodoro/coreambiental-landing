import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: `${article.title} | Core Ambiental`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="gap-2 text-[#5FBD5D] hover:text-[#5FBD5D] hover:bg-[#5FBD5D]/10">
          <Link href="/artigos">
            <ArrowLeft className="w-4 h-4" />
            Voltar para artigos
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <section className="py-8 bg-gradient-to-br from-[#A4D500]/10 via-background to-[#4DD0E1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Badge className="mb-6 bg-gradient-to-r from-[#A4D500] to-[#5FBD5D] text-white border-0">
              <Tag className="w-3 h-3 mr-1" />
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#5FBD5D]" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5FBD5D]" />
                <span>{article.reading_time}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#5FBD5D]" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {/* Back to Articles Button */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
              <Link href="/artigos">Ver todos os artigos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

