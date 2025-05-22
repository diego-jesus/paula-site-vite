export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-2">Entre em Contato</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Estou disponível para ajudar você a transformar sua imagem pessoal e profissional. Vamos conversar?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold playfair mb-6 text-primary">Envie uma mensagem</h3>

              <form
                action="https://formsubmit.co/diegoliveira634@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Novo contato pelo site" />
                <input type="hidden" name="_next" value="https://paula-site-vite.vercel.app/" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Coloração Pessoal">Coloração Pessoal</option>
                    <option value="Análise de Estilo">Análise de Estilo</option>
                    <option value="Guarda-roupa Inteligente">Guarda-roupa Inteligente</option>
                    <option value="Personal Shopper">Personal Shopper</option>
                    <option value="Consultoria para Redes Sociais">Consultoria para Redes Sociais</option>
                    <option value="Consultoria Empresarial">Consultoria Empresarial</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary flex items-center justify-center"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Seção de contato com WhatsApp, Instagram etc. permanece inalterada */}
        </div>
      </div>
    </section>
  );
}
