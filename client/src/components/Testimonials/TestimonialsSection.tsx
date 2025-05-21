export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "A consultoria com Paula mudou completamente minha relação com as roupas. Hoje entendo muito melhor o que me valoriza e consigo me vestir com mais confiança e autenticidade.",
      author: "Mariana Barbosa",
      role: "Empresária",
      initials: "MB",
    },
    {
      quote:
        "Descobrir minha paleta de cores foi revelador! Economizo tanto tempo e dinheiro nas compras, e recebo elogios constantes sobre como pareço mais jovem e radiante.",
      author: "Renata Lima",
      role: "Advogada",
      initials: "RL",
    },
    {
      quote:
        "A consultoria para minha presença digital transformou meu perfil profissional. A Paula tem um olhar técnico e ao mesmo tempo sensível para entender exatamente o que precisamos.",
      author: "Carlos Santos",
      role: "Empreendedor",
      initials: "CS",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-2">Depoimentos</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Veja o que meus clientes dizem sobre a transformação em suas vidas após nossas consultorias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:shadow-xl transition duration-300 border-l-2 border-accent"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-accent">
                  <i className="fas fa-quote-left text-2xl opacity-60"></i>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
