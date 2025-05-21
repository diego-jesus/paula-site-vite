import { useEffect, useState } from "react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/attached_assets/1000393505.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-28 pb-16 md:py-28 bg-gradient-to-br from-primary to-primary/90 text-white"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold playfair mb-4">
              <span className="text-accent">Paula Olivheira</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              Consultora de Imagem e Posicionamento Pessoal
            </h2>
            <p className="text-lg md:text-xl italic mb-8 font-light">
              "Sua imagem comunica antes mesmo que você diga uma palavra"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#services" className="btn btn-primary">
                Meus Serviços
              </a>
              <a href="#contact" className="btn btn-outline">
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-accent rounded-xl blur-sm opacity-50"></div>
              <img
                src="/attached_assets/1000393505.jpg"
                alt="Paula Olivheira - Consultora de Imagem"
                className={`relative rounded-xl shadow-2xl max-w-full h-auto object-cover max-h-[500px] transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
