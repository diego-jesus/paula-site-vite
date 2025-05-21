export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-2">Sobre Mim</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-accent/10 rounded-xl"></div>
              <img
                src="/paula.jpg"
                alt="Paula Olivheira em consultoria"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold playfair mb-6 text-primary">Quem sou eu</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sou consultora de imagem especializada em ajudar pessoas a expressarem sua melhor versão por meio da aparência, estilo e comunicação visual. Atuo com foco em coloração pessoal, análise de estilo, montagem de guarda-roupa inteligente, personal shopper e estratégias visuais para redes sociais. Meu trabalho é acolhedor, técnico e totalmente personalizado — voltado para quem deseja alinhar imagem, autenticidade e objetivos pessoais ou profissionais.
            </p>

            <h3 className="text-xl font-bold playfair mb-4 text-primary">Formação Acadêmica</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-graduation-cap text-accent mr-3"></i>
                <span>Executive MBA – Pontifícia Universidade Católica do Paraná</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-graduation-cap text-accent mr-3"></i>
                <span>MBA em Vendas, Negociação e Resultados de Alta Performance – PUC/PR</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold playfair mb-4 text-primary">Especializações</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Administradora | MBA em Marketing | Consultora de Negócios | Consultora de Moda | Practitioner em PNL | Empreendedora Shell Iniciativa Jovem
            </p>

            <h3 className="text-xl font-bold playfair mb-4 text-primary">Experiência Profissional</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-briefcase text-accent mr-3"></i>
                <span>Especialista de Pessoas e Gestão</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-briefcase text-accent mr-3"></i>
                <span>Gerente Administrativa na Balprensa</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-briefcase text-accent mr-3"></i>
                <span>Compradora no Supermercado Super Bom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
