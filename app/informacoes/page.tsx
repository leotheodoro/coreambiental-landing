import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function InformacoesPage() {
  const faqs = [
    {
      question: "Quanto tempo leva o processo de licenciamento ambiental?",
      answer:
        "O processo de licenciamento ambiental geralmente leva de 6 a 12 meses, variando conforme a complexidade do projeto e os órgãos ambientais envolvidos. Fatores como tipo de atividade, localização e documentação completa podem influenciar o prazo.",
    },
    {
      question: "Quais documentos são necessários para iniciar o licenciamento?",
      answer:
        "Os documentos básicos incluem: CNPJ da empresa, memorial descritivo do empreendimento, plantas e localização do projeto, outorga de uso da água (se aplicável) e documentação do terreno. Dependendo do tipo de atividade, outros documentos específicos podem ser solicitados.",
    },
    {
      question: "O que é um PGRS e é obrigatório?",
      answer:
        "Sim, o PGRS (Plano de Gerenciamento de Resíduos Sólidos) é obrigatório para empresas geradoras de resíduos. Ele estabelece diretrizes para o manejo adequado dos resíduos, desde a geração até a destinação final, garantindo conformidade com a legislação ambiental e promovendo práticas sustentáveis.",
    },
    {
      question: "Preciso de licenciamento para atividades comerciais?",
      answer:
        "Depende do tipo e porte da atividade. Escritórios administrativos geralmente não precisam de licenciamento ambiental. No entanto, atividades que envolvem manipulação de substâncias químicas, geração de resíduos especiais ou potencial impacto ambiental podem exigir licenciamento. Recomendamos uma consulta para avaliar seu caso específico.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Informações</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perguntas frequentes sobre nossos serviços e processos ambientais
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Ainda tem dúvidas?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe está pronta para esclarecer todas as suas questões sobre consultoria ambiental
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5514998851685"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Ligar agora
              </a>
              <a
                href="mailto:ambientalcore@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
