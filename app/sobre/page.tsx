import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Users, Handshake } from "lucide-react"

export default function SobrePage() {
  const team = [
    {
      name: "Eduardo Mallet",
      role: "Engenheiro Ambiental e Sanitarista",
      description: "Mestrado em Meio Ambiente, Recursos Hídricos e Saneamento Ambiental.",
      image: "/environmental-engineer-portrait.png",
    },
    {
      name: "Gabriela Faria Crispim",
      role: "Bióloga",
      description: "7 anos de experiência no setor público e especializada em ESG.",
      image: "/professional-biologist-woman-portrait.jpg",
    },
    {
      name: "Tamiris Teixeira Verjiao",
      role: "Bióloga",
      description: "Especialista em Licenciamento Ambiental e gestão pública.",
      image: "/professional-biologist-woman-portrait.jpg",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Sustentabilidade",
      description: "Equilíbrio entre desenvolvimento econômico e preservação ambiental.",
    },
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Rigor científico e qualidade em todos os nossos serviços.",
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Transparência e colaboração com nossos clientes.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Busca por novas tecnologias e soluções criativas.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sobre Nós</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conheça a Core Ambiental e nossa equipe de especialistas dedicados à sustentabilidade
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">Nossa História</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Core Ambiental é uma consultoria especializada em soluções ambientais, com foco em sustentabilidade,
              licenciamento e projetos técnicos. Nossa equipe multidisciplinar une conhecimento científico, experiência
              prática e inovação para auxiliar empresas e órgãos públicos a alcançarem resultados sustentáveis e
              responsáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer soluções ambientais integradas e inovadoras que auxiliem nossos clientes a alcançarem
                  sustentabilidade em seus negócios, garantindo conformidade legal e excelência técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em consultoria ambiental, reconhecida pela qualidade dos serviços, inovação tecnológica
                  e compromisso com a sustentabilidade e conservação ambiental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Profissionais qualificados e experientes dedicados à excelência ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Princípios que guiam nosso trabalho e compromisso com a sustentabilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
