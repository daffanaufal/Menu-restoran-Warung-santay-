import React from 'react';
import { Coffee, UtensilsCrossed } from 'lucide-react';

// Menu categories and items
const categories = [
  { id: 'makanan', icon: UtensilsCrossed, name: 'Menu Makanan' },
  { id: 'minuman', icon: Coffee, name: 'Menu Minuman' },
];

const menuItems = {
  makanan: [
    {
      nama: 'Nasi Goreng Special',
      harga: 'Rp 45.000',
      deskripsi: 'Nasi goreng dengan telur, ayam, udang, dan sayuran segar',
      gambar: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8
    },
    {
      nama: 'Beef Burger Deluxe',
      harga: 'Rp 65.000',
      deskripsi: 'Burger daging sapi premium dengan keju, dan saus special',
      gambar: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      nama: 'Sate Ayam Madura',
      harga: 'Rp 40.000',
      deskripsi: 'Sate ayam dengan bumbu kacang khas Madura, 10 tusuk',
      gambar: 'https://plus.unsplash.com/premium_photo-1669150849084-0713205441c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2F0ZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.7
    },
    {
      nama: 'Mie Goreng Special',
      harga: 'Rp 38.000',
      deskripsi: 'Mie goreng dengan udang, ayam, bakso, dan sayuran',
      gambar: 'https://media.istockphoto.com/id/2076923096/photo/mie-goreng-or-fried-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sap3ww5VLojUTkb2odd9iiHsgYEmLhPRHyra4AejeG8=',
      rating: 4.6
    },
    {
      nama: 'Ayam Bakar Madu',
      harga: 'Rp 52.000',
      deskripsi: 'Ayam bakar dengan glazed madu special dan sambal',
      gambar: 'https://media.istockphoto.com/id/1329698438/photo/fresly-grilled-chicken-leg-quarter.webp?a=1&b=1&s=612x612&w=0&k=20&c=ThEG0G2X4pcvJx-HZEYMlAR0X0athwZ0QdLG7Z4dXnQ=',
      rating: 4.8
    },
    {
      nama: 'Gado-gado Special',
      harga: 'Rp 35.000',
      deskripsi: 'Sayuran segar dengan telur dan bumbu kacang premium',
      gambar: 'https://images.unsplash.com/photo-1707269561481-a4a0370a980a?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5
    },
    {
      nama: 'Sop Buntut',
      harga: 'Rp 75.000',
      deskripsi: 'Sop buntut sapi dengan kuah bening dan sayuran segar',
      gambar: 'https://media.istockphoto.com/id/2199378221/photo/delicious-indonesian-sop-buntut-a-savory-beef-tail-soup-served-with-rice-boiled-egg-bean.webp?a=1&b=1&s=612x612&w=0&k=20&c=dvz9S9zNh0mdWUWPiIqfpiARBsQLl1rZF7OFhSL8KBQ=',
      rating: 4.9
    },
    {
      nama: 'Nasi Campur Bali',
      harga: 'Rp 48.000',
      deskripsi: 'Nasi dengan ayam sisit, telur, sayur urap, dan sambal matah',
      gambar: 'https://media.istockphoto.com/id/2168021642/photo/nasi-campur-bali-balinese-meal-of-rice-with-varieties-of-side-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=dbK_IXVusdsRWC1jkZrQ1daZMLY1k_UbApZVNq2nFaA=',
      rating: 4.7
    }
  ],
  minuman: [
    {
      nama: 'Es Kopi Susu',
      harga: 'Rp 28.000',
      deskripsi: 'Espresso, susu segar, dan gula aren',
      gambar: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      nama: 'Matcha Latte',
      harga: 'Rp 32.000',
      deskripsi: 'Green tea matcha premium dengan susu segar',
      gambar: 'https://media.istockphoto.com/id/1146602390/photo/matcha-green-tea.webp?a=1&b=1&s=612x612&w=0&k=20&c=BDEEeRBDrz8e7lvwVMXgBxBPKnBDTbUCEwDxRve3p04=',
      rating: 4.8
    },
    {
      nama: 'Fresh Orange Juice',
      harga: 'Rp 25.000',
      deskripsi: 'Jus jeruk segar tanpa gula tambahan',
      gambar: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.6
    },
    {
      nama: 'Teh Tarik',
      harga: 'Rp 20.000',
      deskripsi: 'Teh susu khas Malaysia yang creamy',
      gambar: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7
    },
    {
      nama: 'Avocado Coffee',
      harga: 'Rp 35.000',
      deskripsi: 'Perpaduan alpukat dan espresso dengan susu',
      gambar: 'https://media.istockphoto.com/id/1165956512/photo/avocado-espresso-float.webp?a=1&b=1&s=612x612&w=0&k=20&c=fNX28i7KZiPUGJlwpmuN7fk_W4eykvglncPasMjVFoc=',
      rating: 4.8
    },
    {
      nama: 'Chocolate Milkshake',
      harga: 'Rp 30.000',
      deskripsi: 'Milkshake coklat dengan whipped cream',
      gambar: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7
    },
    {
      nama: 'Lemon Tea',
      harga: 'Rp 22.000',
      deskripsi: 'Teh dengan lemon segar dan madu',
      gambar: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.5
    },
    {
      nama: 'Strawberry Smoothie',
      harga: 'Rp 28.000',
      deskripsi: 'Smoothie stroberi dengan yogurt dan madu',
      gambar: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.6
    }
  ]
};

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderRating = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      {/* Header */}
      <header className="bg-[#2d3436] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <UtensilsCrossed className="h-8 w-8" />
            Warung Santai
          </h1>
          <p className="text-gray-300">Tempat Makan & Ngopi Nyaman</p>
        </div>
      </header>

      {/* Hero Image - Optimized */}
      <div 
        className="h-64 md:h-96 w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80")'
        }}
      />

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="flex items-center gap-2 px-6 py-2 bg-[#2d3436] text-white rounded-full hover:bg-[#1e2122] transition-colors"
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-12">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-12 scroll-mt-20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <category.icon className="h-6 w-6 text-[#2d3436]" />
              <h2 className="text-3xl font-bold text-center text-[#2d3436]">
                {category.name}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems[category.id as keyof typeof menuItems].map((item) => (
                <div
                  key={item.nama}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.nama}</h3>
                      <p className="text-[#2d3436] font-bold">{item.harga}</p>
                    </div>
                    <p className="text-gray-600 mb-2">{item.deskripsi}</p>
                    <div className="flex items-center gap-1">
                      {renderRating(item.rating)}
                      <span className="text-sm text-gray-500 ml-1">({item.rating})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#2d3436] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Warung Santai. Buka Setiap Hari: 08.00 - 22.00</p>
          <p className="text-gray-400 mt-2">Jl. Contoh No. 123, Jakarta</p>
        </div>
      </footer>
    </div>
  );
}

export default App;