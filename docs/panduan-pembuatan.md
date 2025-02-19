# Panduan Pembuatan Website Menu Restoran

## Daftar Isi
1. [Persiapan Awal](#persiapan-awal)
2. [Struktur Komponen](#struktur-komponen)
3. [Styling dan Desain](#styling-dan-desain)
4. [Implementasi Fitur](#implementasi-fitur)
5. [Optimisasi](#optimisasi)

## Persiapan Awal

### 1. Setup Project
Project ini menggunakan React + Vite dengan TypeScript dan Tailwind CSS. Berikut langkah-langkah persiapannya:

```bash
# 1. Buat project baru dengan Vite
npm create vite@latest nama-project -- --template react-ts

# 2. Masuk ke direktori project
cd nama-project

# 3. Install dependencies
npm install

# 4. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Install Lucide React untuk icons
npm install lucide-react
```

Detail setiap langkah:

1. **Membuat Project Vite**
   - Vite dipilih karena:
     - Development server yang sangat cepat
     - Hot Module Replacement (HMR) yang efisien
     - Optimized build untuk production
     - TypeScript support yang baik

2. **Struktur Direktori**
   ```
   nama-project/
   ├── node_modules/
   ├── public/
   ├── src/
   │   ├── components/
   │   ├── App.tsx
   │   ├── main.tsx
   │   ├── index.css
   │   └── vite-env.d.ts
   ├── index.html
   ├── package.json
   ├── tsconfig.json
   ├── vite.config.ts
   ├── postcss.config.js
   └── tailwind.config.js
   ```

3. **Konfigurasi TypeScript**
   File `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true
     },
     "include": ["src"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

### 2. Konfigurasi Tailwind CSS
File `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2d3436',
        secondary: '#1e2122',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

File `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

## Struktur Komponen

### 1. Data Menu
Definisi TypeScript untuk data menu:

```typescript
// src/types/menu.ts
interface MenuItem {
  nama: string;
  harga: string;
  deskripsi: string;
  gambar: string;
}

interface MenuData {
  makanan: MenuItem[];
  minuman: MenuItem[];
}

const menuItems: MenuData = {
  makanan: [
    { 
      nama: 'Nasi Goreng Spesial', 
      harga: 'Rp 35.000', 
      deskripsi: 'Nasi goreng dengan telur, ayam, dan sayuran segar',
      gambar: 'URL_GAMBAR'
    },
    // ... item lainnya
  ],
  minuman: [
    // ... daftar minuman
  ]
};

export type { MenuItem, MenuData };
export default menuItems;
```

### 2. Komponen Utama
Struktur komponen dengan penjelasan detail:

1. **Header Component**
   ```tsx
   // src/components/Header.tsx
   import { UtensilsCrossed } from 'lucide-react';

   const Header = () => {
     return (
       <header className="bg-primary text-white py-8">
         <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
             <UtensilsCrossed className="h-8 w-8" />
             Warung Santai
           </h1>
           <p className="text-gray-300">Tempat Makan & Ngopi Nyaman</p>
         </div>
       </header>
     );
   };

   export default Header;
   ```

2. **Hero Component**
   ```tsx
   // src/components/Hero.tsx
   const Hero = () => {
     return (
       <div 
         className="h-64 md:h-96 w-full bg-cover bg-center" 
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
         }}
       />
     );
   };

   export default Hero;
   ```

3. **Navigation Component**
   ```tsx
   // src/components/Navigation.tsx
   import { Coffee, UtensilsCrossed } from 'lucide-react';

   const Navigation = () => {
     const scrollToSection = (id: string) => {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
     };

     return (
       <div className="sticky top-0 bg-white shadow-md z-50">
         <div className="container mx-auto px-4 py-4">
           <div className="flex justify-center gap-4">
             <NavButton 
               icon={<UtensilsCrossed className="h-5 w-5" />}
               text="Menu Makanan"
               onClick={() => scrollToSection('makanan')}
             />
             <NavButton 
               icon={<Coffee className="h-5 w-5" />}
               text="Menu Minuman"
               onClick={() => scrollToSection('minuman')}
             />
           </div>
         </div>
       </div>
     );
   };

   interface NavButtonProps {
     icon: React.ReactNode;
     text: string;
     onClick: () => void;
   }

   const NavButton = ({ icon, text, onClick }: NavButtonProps) => (
     <button
       onClick={onClick}
       className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors"
     >
       {icon}
       <span>{text}</span>
     </button>
   );

   export default Navigation;
   ```

## Implementasi Fitur

### 1. Menu Section Component
```tsx
// src/components/MenuSection.tsx
import { LucideIcon } from 'lucide-react';
import type { MenuItem } from '../types/menu';

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItem[];
  icon: LucideIcon;
}

const MenuSection = ({ id, title, items, icon: Icon }: MenuSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold text-center text-primary">
          {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuCard key={item.nama} item={item} />
        ))}
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.gambar} 
          alt={item.nama}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.nama}</h3>
        <p className="text-gray-600 mb-2">{item.deskripsi}</p>
        <p className="text-primary font-bold">{item.harga}</p>
      </div>
    </div>
  );
};

export default MenuSection;
```

### 2. Footer Component
```tsx
// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Warung Santai. Buka Setiap Hari: 08.00 - 22.00</p>
        <p className="text-gray-400 mt-2">Jl. Contoh No. 123, Jakarta</p>
      </div>
    </footer>
  );
};

export default Footer;
```

## Styling dan Desain

### 1. Warna dan Tema
Definisi warna di `tailwind.config.js`:
```js
colors: {
  primary: '#2d3436',    // Warna utama untuk header, footer, dan text penting
  secondary: '#1e2122',  // Warna untuk hover states
  accent: '#f8f5f2',    // Warna background
}
```

### 2. Layout
- Grid system untuk menu cards
- Responsive breakpoints:
  - Mobile: 1 kolom
  - Tablet (md): 2 kolom
  - Desktop: 2 kolom dengan spacing lebih besar

### 3. Animasi dan Transisi
- Hover effects pada cards
- Smooth scrolling untuk navigasi
- Image scale effect

## Optimisasi

### 1. Performance
```tsx
// Lazy loading components
import { lazy, Suspense } from 'react';

const MenuSection = lazy(() => import('./components/MenuSection'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MenuSection {...props} />
    </Suspense>
  );
}
```

### 2. SEO
```tsx
// Tambahkan meta tags di index.html
<head>
  <meta name="description" content="Menu Warung Santai - Tempat makan dan ngopi nyaman di Jakarta" />
  <meta name="keywords" content="warung, cafe, restaurant, jakarta, menu" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Warung Santai - Menu</title>
</head>
```

### 3. Accessibility
```tsx
// Tambahkan ARIA labels dan roles
<button
  aria-label="Scroll to food menu"
  role="navigation"
  onClick={() => scrollToSection('makanan')}
>
  Menu Makanan
</button>
```

## Tips Pengembangan Lanjutan

1. **State Management**
   - Gunakan React Context untuk state global
   - Implementasi shopping cart
   - Filter dan search functionality

2. **Backend Integration**
   - Setup API endpoints
   - Database untuk menu items
   - Authentication untuk admin panel

3. **Testing**
   - Unit tests dengan Vitest
   - Integration tests
   - E2E tests dengan Cypress

## Kesimpulan

Website menu restoran ini dibangun dengan:
1. Modern tech stack (React, TypeScript, Tailwind)
2. Component-based architecture
3. Responsive design
4. Performance optimization
5. Accessibility considerations

Dengan mengikuti panduan ini, Anda dapat membuat website menu restoran yang profesional dan siap untuk production.