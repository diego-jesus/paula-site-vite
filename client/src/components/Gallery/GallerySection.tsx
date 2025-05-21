export default function GallerySection() {
  const galleryItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Consultoria de Guarda-roupa",
      subtitle: "Organização e seleção de peças-chave",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Coloração Pessoal",
      subtitle: "Descobrindo as cores que valorizam",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Personal Shopper",
      subtitle: "Compras eficientes e assertivas",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-2">
            Galeria de Transformações
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Veja alguns dos resultados das nossas consultorias de imagem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold playfair">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
