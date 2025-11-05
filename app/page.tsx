import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, Droplets, Mountain, Recycle, Building2, Leaf } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: FileCheck,
      title: "Licenciamento Ambiental",
      items: [
        "LP, LI, LO",
        "EIA/RIMA",
        "PRAD, PCA/RAS, RAP",
        "Renovação de Licenças",
        "CTF",
        "Compensação Ambiental",
        "Levantamento de Fauna e Flora",
        "Laudos de Recursos Naturais",
      ],
    },
    {
      icon: Droplets,
      title: "Autorizações e Intervenções",
      items: ["Outorgas e Uso da Água", "Projetos em APPs", "Supressão de Vegetação", "Arborização Urbana"],
    },
    {
      icon: Mountain,
      title: "Monitoramento e Topografia",
      items: [
        "Georreferenciamento com drones",
        "Levantamentos Topográficos",
        "Monitoramento Ambiental (água, solo, vegetação)",
        "Inspeção Ambiental e Documentação Fotográfica",
      ],
    },
    {
      icon: Recycle,
      title: "Gestão de Resíduos",
      items: ["PGRS/PGRSS/PGRCC", "CADRI", "MTR", "Logística Reversa"],
    },
    {
      icon: Building2,
      title: "Aprovação de Loteamentos (GRAPROHAB)",
      items: ["Parcelamento do Solo", "Projetos e Laudos Ambientais"],
    },
    {
      icon: Leaf,
      title: "Outros Serviços",
      items: [
        "CAR",
        "Programas de Educação Ambiental",
        "Município Verde-Azul e Município Agro",
        "TAC",
        "Gerenciamento de Áreas Contaminadas",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-primary/20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Brand gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#A4D500]/30 via-[#5FBD5D]/20 to-[#4DD0E1]/30 mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo_branca_horizontal.svg"
                alt="Core Ambiental"
                width={400}
                height={120}
                className="h-24 md:h-32 w-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 text-balance">
            Consultoria Ambiental e Agrícola
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 leading-relaxed">
            Oferecemos soluções sustentáveis e eficientes para empresas e eventos.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-linear-to-r from-[#A4D500] via-[#5FBD5D] to-[#4DD0E1] hover:opacity-90 transition-opacity">
              <Link href="/servicos">Conheça nossos serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance gradient-text">Conheça nossos serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Soluções completas em consultoria ambiental e agrícola para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#5FBD5D]/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-linear-to-br from-[#A4D500]/20 to-[#4DD0E1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#A4D500]/40 group-hover:to-[#4DD0E1]/40 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#5FBD5D] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="gradient-text mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
