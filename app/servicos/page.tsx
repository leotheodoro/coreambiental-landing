import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, Recycle, Droplets, Mountain, Building2, Leaf } from "lucide-react"

export default function ServicosPage() {
  const serviceCategories = [
    {
      icon: FileCheck,
      title: "Licenciamento e Estudos Ambientais",
      services: [
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
      icon: Recycle,
      title: "Gestão de Resíduos",
      services: ["PGRS", "PGRSS", "PGRCC", "CADRI", "MTR", "Logística Reversa"],
    },
    {
      icon: Droplets,
      title: "Autorizações e Intervenções",
      services: ["Outorgas", "Projetos em APPs", "Supressão de Vegetação", "Arborização Urbana"],
    },
    {
      icon: Mountain,
      title: "Monitoramento e Topografia",
      services: [
        "Georreferenciamento com drones",
        "Levantamentos Topográficos",
        "Monitoramento Ambiental",
        "Inspeção Ambiental",
      ],
    },
    {
      icon: Building2,
      title: "Aprovação de Loteamentos (GRAPROHAB)",
      services: ["Parcelamento do Solo", "Projetos", "Laudos e Plantas Urbanísticas"],
    },
    {
      icon: Leaf,
      title: "Outros Serviços",
      services: ["CAR", "Educação Ambiental", "Programas Municipais", "TAC", "Áreas Contaminadas (GAC)"],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#A4D500]/10 via-background to-[#4DD0E1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance gradient-text">Nossos Serviços</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluções completas em consultoria ambiental e agrícola para empresas, órgãos públicos e eventos
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#5FBD5D]/30"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#A4D500]/20 to-[#4DD0E1]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#A4D500]/40 group-hover:to-[#4DD0E1]/40 group-hover:scale-110 transition-all duration-300">
                      <category.icon className="w-7 h-7 text-[#5FBD5D] transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-balance">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="gradient-text mt-1 font-bold">•</span>
                        <span className="leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Precisa de uma consultoria ambiental?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a alcançar a sustentabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5514998851685"
                className="inline-flex items-center justify-center px-8 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                (14) 99885-1685
              </a>
              <a
                href="mailto:ambientalcore@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                ambientalcore@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
