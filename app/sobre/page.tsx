import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faFlask, faHandshake, faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function SobrePage() {
  const team = [
    {
      name: "Eduardo Mallet",
      role: "Engenheiro Ambiental e Sanitarista",
      description: "Mestrado em Meio Ambiente, Recursos Hídricos e Saneamento Ambiental.",
      image: "/eduardo.jpg",
      linkedin: "https://www.linkedin.com/in/eduardo-rodrigo-viana-mallet-114567212/",
    },
    {
      name: "Gabriela Faria Crispim",
      role: "Bióloga",
      description: "7 anos de experiência no setor público e especializada em ESG.",
      image: "/gabriela.jpg",
      linkedin: "https://www.linkedin.com/in/gabriela-faria-84736a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Tamiris Teixeira Verjiao",
      role: "Bióloga",
      description: "Especialista em Licenciamento Ambiental e gestão pública.",
      image: "/tamiris.jpg",
      linkedin: "https://www.linkedin.com/in/tamiris-teixeira-05a85957?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  const values = [
    {
      icon: faLeaf,
      title: "Sustentabilidade",
      description: "Equilíbrio entre desenvolvimento econômico e preservação ambiental.",
    },
    {
      icon: faFlask,
      title: "Excelência Técnica",
      description: "Rigor científico e qualidade em todos os nossos serviços.",
    },
    {
      icon: faHandshake,
      title: "Parceria",
      description: "Transparência e colaboração com nossos clientes.",
    },
    {
      icon: faLightbulb,
      title: "Inovação",
      description: "Busca por novas tecnologias e soluções criativas.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-[#A4D500]/10 via-background to-[#4DD0E1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance gradient-text">Sobre Nós</h1>
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
              A Core Ambiental é uma consultoria especializada em soluções ambientais e agrícolas, com foco em sustentabilidade,
              licenciamento e projetos técnicos. Nossa equipe multidisciplinar une conhecimento científico, experiência
              prática e inovação para auxiliar empresas e órgãos públicos a alcançarem resultados sustentáveis e
              responsáveis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Fundada com o propósito de transformar o relacionamento entre negócios e meio ambiente, 
            atuamos com excelência técnica e compromisso com o desenvolvimento sustentável, 
            oferecendo soluções integradas que atendem às exigências legais e promovem a conservação ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-[#5FBD5D]/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-[#A4D500]/20 to-[#5FBD5D]/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#5FBD5D]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer soluções ambientais e agrícolas que auxiliem nossos clientes a alcançarem
                  sustentabilidade em seus negócios, garantindo conformidade legal e excelência técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4DD0E1]/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-[#5FBD5D]/20 to-[#4DD0E1]/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#4DD0E1]" />
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
            <div className="w-12 h-12 bg-linear-to-br from-[#A4D500]/20 to-[#4DD0E1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#5FBD5D]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Profissionais qualificados e experientes dedicados à excelência ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#5FBD5D]/30 cursor-pointer">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="gradient-text font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </a>
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
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#5FBD5D]/30"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-linear-to-br from-[#A4D500]/20 to-[#4DD0E1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#A4D500]/40 group-hover:to-[#4DD0E1]/40 group-hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-[#5FBD5D] transition-colors" />
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
