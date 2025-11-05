import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, BookOpen } from "lucide-react"
import { getAllArticles } from "@/lib/articles"

export default function ArtigosPage() {
  const articles = getAllArticles()

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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#A4D500]/10 via-background to-[#4DD0E1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A4D500]/20 to-[#4DD0E1]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-[#5FBD5D]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance gradient-text">Artigos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conheça mais sobre gestão ambiental, licenciamento e sustentabilidade através dos nossos artigos
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Nenhum artigo disponível no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <Link key={article.slug} href={`/artigos/${article.slug}`}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#5FBD5D]/30">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Category Badge */}
                      <Badge className="w-fit mb-4 bg-gradient-to-r from-[#A4D500] to-[#5FBD5D] text-white border-0 hover:opacity-90">
                        {article.category}
                      </Badge>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 text-balance group-hover:gradient-text transition-all">
                        {article.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
                        {article.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex flex-col gap-2 pt-4 border-t border-border text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#5FBD5D]" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#5FBD5D]" />
                            <span>{article.reading_time}</span>
                          </div>
                          <span className="text-xs font-medium">{article.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

