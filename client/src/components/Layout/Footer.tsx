export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold playfair mb-4">
              <span className="text-accent">P</span>aula{" "}
              <span className="text-accent">O</span>livheira
            </h3>
            <p className="text-gray-300 max-w-md">
              Consultora de Imagem e Posicionamento Pessoal especializada em transformar a percepção visual de seus clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-accent transition">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-accent transition">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-accent transition">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-accent transition">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-accent transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:paulaolivheira@gmail.com"
                    className="text-gray-300 hover:text-accent transition flex items-center"
                  >
                    <i className="fas fa-envelope mr-2 text-accent"></i> E-mail
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5521987727761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent transition flex items-center"
                  >
                    <i className="fab fa-whatsapp mr-2 text-accent"></i> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/paulaoliveis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent transition flex items-center"
                  >
                    <i className="fab fa-instagram mr-2 text-accent"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/paula-olivheira-2a178999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent transition flex items-center"
                  >
                    <i className="fab fa-linkedin mr-2 text-accent"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Paula Olivheira. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://instagram.com/paulaoliveis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/paula-olivheira-2a178999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://wa.me/5521987727761"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href="mailto:paulaolivheira@gmail.com"
              className="text-gray-400 hover:text-accent transition"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
