export default function ServicesSection() {
  const serviceCategories = [
    {
      title: "SERVIÇOS INDIVIDUAIS",
      services: [
        {
          icon: "fas fa-magic",
          title: "Consultoria de Imagem Completa – Imagem com Propósito",
          description:
            "Transformação visual e estratégica para alinhar sua imagem à sua essência e objetivos. Inclui análise de estilo, coloração pessoal, análise de silhueta, curadoria de guarda-roupa, montagem de looks e personal shopping.",
        },
        {
          icon: "fas fa-palette",
          title: "Coloração Pessoal – Cores que Revelam",
          description:
            "Descubra quais cores valorizam sua beleza natural, aumentam sua presença e transmitem a mensagem certa.",
        },
        {
          icon: "fas fa-shopping-bag",
          title: "Personal Stylist – Estilo sob Medida",
          description:
            "Acompanhamento em compras estratégicas, com foco em funcionalidade, identidade e elegância. Ideal para quem quer renovar o guarda-roupa com inteligência.",
        },
        {
          icon: "fas fa-user-tie",
          title: "Análise de Estilo – Seu Estilo, Sua Marca",
          description:
            "Mapeamento completo da sua identidade visual: estilos universais, personalidade, desejos e objetivos de imagem.",
        },
        {
          icon: "fas fa-tshirt",
          title: "Revisão de Guarda-Roupa – Menos é Mais Poder",
          description:
            "Eliminação do excesso e curadoria de peças com propósito. Organização inteligente, montagem de looks e lista de peças-chave para investir.",
        }
      ]
    },
    {
      title: "SERVIÇOS PARA MULHERES PROFISSIONAIS E EMPREENDEDORAS",
      services: [
        {
          icon: "fas fa-crown",
          title: "Mentoria de Imagem e Posicionamento – Imagem Magnética",
          description:
            "Mentoria personalizada para mulheres que querem se posicionar com força, sofisticação e autenticidade. Ideal para profissionais liberais, executivas, influenciadoras ou empreendedoras.",
        },
        {
          icon: "fas fa-camera",
          title: "Consultoria para Sessões de Fotos – Imagem Cênica",
          description:
            "Planejamento estratégico de looks, cores e mensagens para sessões fotográficas profissionais.",
        },
        {
          icon: "fas fa-bolt",
          title: "Express Style – Impacto Imediato",
          description:
            "Consultoria rápida (1 encontro) para um evento, reunião importante, palestra ou entrevista. Escolha estratégica de roupa, cor e imagem a transmitir.",
        }
      ]
    },
    {
      title: "EXCLUSIVOS / PREMIUM",
      services: [
        {
          icon: "fas fa-gem",
          title: "Transformação VIP – Nova Versão",
          description:
            "Imersão 3.0 de alto nível para transformar imagem, mentalidade e presença. Atendimento premium, com cronograma personalizado e acompanhamento contínuo.",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Programa de Imagem Digital – Marca Pessoal no Instagram",
          description:
            "Consultoria para quem quer construir uma presença poderosa nas redes sociais. Imagem pessoal, comunicação visual, aparência em vídeos, fotos e stories.",
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-2">Meus Serviços</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Ofereço consultoria personalizada para transformar sua imagem e expressão visual, potencializando sua autenticidade e objetivos.
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-accent flex-grow mr-4"></div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold playfair text-primary text-center leading-snug px-2 max-w-[300px] mx-auto">
                  {category.title}
                </h3>
              <div className="h-px bg-accent flex-grow ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="mb-4 text-accent">
                    <i className={`${service.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold playfair mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#contact"
                    className="text-accent font-medium inline-flex items-center hover:underline"
                  >
                    Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
