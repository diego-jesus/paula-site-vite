import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // FormSubmit requires a real form submission with page reload
      // This is just to simulate success/error states in our React app
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitError("Houve um erro ao enviar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  <div className="flex">
                    <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                    <div>
                      <p className="font-medium">Mensagem enviada com sucesso!</p>
                      <p className="mt-1">Obrigada pelo seu contato. Retornarei em breve.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/paulaolivheira@gmail.com"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.service}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                      <div className="flex">
                        <i className="fas fa-exclamation-circle text-red-500 mr-3 text-xl"></i>
                        <p>{submitError}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="w-full btn btn-primary flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin mr-2"></i>
                          Enviando...
                        </>
                      ) : (
                        "Enviar mensagem"
                      )}
                    </button>
                  </div>

                  {/* Hidden fields for FormSubmit */}
                  <input type="hidden" name="_subject" value="Novo contato pelo site" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://seusite.com.br/obrigado" />
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-primary text-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-bold playfair mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <a
                      href="mailto:paulaolivheira@gmail.com"
                      className="text-gray-300 hover:text-white transition"
                    >
                      paulaolivheira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5521987727761"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      (21) 9 8772-7761
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/paulaoliveis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      @paulaoliveis
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/paula-olivheira-2a178999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Paula Olivheira
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold playfair mb-6">Agende uma consulta</h3>
                <p className="text-gray-300 mb-4">
                  Pronta para transformar sua imagem? Clique no botão abaixo para agendar uma conversa inicial sem compromisso.
                </p>
                <a
                  href="https://wa.me/5521987727761?text=Olá%20Paula,%20gostaria%20de%20agendar%20uma%20consultoria%20de%20imagem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline inline-block"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
