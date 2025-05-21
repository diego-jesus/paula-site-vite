export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-palette",
      title: "Coloração Pessoal",
      description:
        "Descubra a paleta de cores que harmoniza perfeitamente com seu tom de pele, olhos e cabelos, realçando sua beleza natural e transmitindo a mensagem visual adequada.",
    },
    {
      icon: "fas fa-user-tie",
      title: "Análise de Estilo",
      description:
        "Identifique seu estilo pessoal autêntico através de uma análise completa que considera personalidade, estilo de vida e objetivos profissionais.",
    },
    {
      icon: "fas fa-tshirt",
      title: "Guarda-roupa Inteligente",
      description:
        "Organize seu guarda-roupa com peças versáteis e combinações estratégicas que maximizam suas opções de looks com menos itens.",
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Personal Shopper",
      description:
        "Acompanhamento personalizado para compras eficientes, ajudando você a selecionar peças que valorizam seu tipo físico e estilo pessoal.",
    },
    {
      icon: "fas fa-camera",
      title: "Consultoria para Redes Sociais",
      description:
        "Estratégias visuais para potencializar sua presença digital, com orientações sobre composição de imagem, estilo e identidade visual.",
    },
    {
      icon: "fas fa-comments",
      title: "Consultoria Empresarial de Imagem",
      description:
        "Desenvolva a imagem profissional da sua equipe, alinhando a apresentação visual com os valores e mensagem da sua marca.",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
    </section>
  );
}
