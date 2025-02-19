# Panduan Detail CSS untuk Website Menu Restoran

## Daftar Isi
1. [Dasar Tailwind CSS](#dasar-tailwind-css)
2. [Layout dan Spacing](#layout-dan-spacing)
3. [Typography](#typography)
4. [Colors dan Background](#colors-dan-background)
5. [Flexbox dan Grid](#flexbox-dan-grid)
6. [Animations dan Transitions](#animations-dan-transitions)
7. [Responsive Design](#responsive-design)
8. [Components Styling](#components-styling)

## Dasar Tailwind CSS

### Setup Dasar
```css
/* src/index.css */
@tailwind base;    /* Reset CSS dan styles dasar */
@tailwind components; /* Untuk component classes */
@tailwind utilities; /* Untuk utility classes */
```

### Cara Kerja Utility Classes
- Prefix menunjukkan properti: `p-` (padding), `m-` (margin), `bg-` (background)
- Angka menunjukkan ukuran: `p-4` = padding 1rem (16px)
- Arah bisa dispesifikkan: `pt-` (top), `pb-` (bottom), `pl-` (left), `pr-` (right)

## Layout dan Spacing

### Container dan Margin
```jsx
// Container utama dengan padding horizontal
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

Penjelasan Detail:
- `container`: 
  - Fungsi: Memberikan max-width yang responsive
  - Default breakpoints:
    - sm (640px): max-width: 640px
    - md (768px): max-width: 768px
    - lg (1024px): max-width: 1024px
    - xl (1280px): max-width: 1280px
    - 2xl (1536px): max-width: 1536px

- `mx-auto`: 
  - Fungsi: Membuat container berada di tengah halaman
  - Cara kerja: Memberikan margin-left: auto dan margin-right: auto
  - Penggunaan: Ideal untuk centering elemen yang memiliki fixed width

- `px-4`: 
  - Fungsi: Memberikan padding horizontal
  - Ukuran: 1rem (16px) di kiri dan kanan
  - Kegunaan: Mencegah konten menempel di pinggir layar

### Spacing System
```jsx
// Contoh spacing yang umum digunakan
<div className="p-4 m-2 space-y-4">
  <div className="mb-4">Item 1</div>
  <div className="mb-4">Item 2</div>
</div>
```

Detail Spacing System:
1. Padding (`p-{size}`):
   - `p-0`: 0px
   - `p-1`: 0.25rem (4px)
   - `p-2`: 0.5rem (8px)
   - `p-3`: 0.75rem (12px)
   - `p-4`: 1rem (16px)
   - `p-5`: 1.25rem (20px)
   - `p-6`: 1.5rem (24px)
   - `p-8`: 2rem (32px)
   - `p-10`: 2.5rem (40px)
   - `p-12`: 3rem (48px)
   - `p-16`: 4rem (64px)

2. Margin (`m-{size}`):
   - Menggunakan skala yang sama dengan padding
   - Negative margins tersedia dengan prefix `-m`
   - Contoh: `-mt-4` = margin-top: -1rem

3. Space Between (`space-{x/y}-{size}`):
   - Fungsi: Memberikan margin antara child elements
   - `space-y-4`: Vertical spacing 1rem
   - `space-x-4`: Horizontal spacing 1rem
   - Cara kerja: Menggunakan margin-top atau margin-left pada semua elemen kecuali yang pertama

## Typography

### Font Sizes
```jsx
<h1 className="text-4xl">Judul Besar</h1>
<h2 className="text-3xl">Sub Judul</h2>
<p className="text-base">Teks normal</p>
<span className="text-sm">Teks kecil</span>
```

Detail Typography System:

1. Font Size Classes:
   ```
   Class       Size      Line Height
   text-xs     12px      16px
   text-sm     14px      20px
   text-base   16px      24px
   text-lg     18px      28px
   text-xl     20px      28px
   text-2xl    24px      32px
   text-3xl    30px      36px
   text-4xl    36px      40px
   text-5xl    48px      1
   text-6xl    60px      1
   text-7xl    72px      1
   text-8xl    96px      1
   text-9xl    128px     1
   ```

2. Font Weight:
   ```
   Class           Weight
   font-thin       100
   font-extralight 200
   font-light      300
   font-normal     400
   font-medium     500
   font-semibold   600
   font-bold       700
   font-extrabold  800
   font-black      900
   ```

3. Text Alignment:
   - `text-left`: Rata kiri
   - `text-center`: Tengah
   - `text-right`: Rata kanan
   - `text-justify`: Rata kiri-kanan

4. Text Decoration:
   - `underline`: Garis bawah
   - `line-through`: Garis tengah
   - `no-underline`: Hapus garis bawah

5. Line Height:
   - `leading-none`: 1
   - `leading-tight`: 1.25
   - `leading-snug`: 1.375
   - `leading-normal`: 1.5
   - `leading-relaxed`: 1.625
   - `leading-loose`: 2

## Colors dan Background

### Warna Teks
```jsx
<p className="text-gray-600">Teks abu-abu</p>
<p className="text-[#2d3436]">Teks dengan hex color</p>
<p className="text-white">Teks putih</p>
```

Detail Sistem Warna:

1. Color Opacity:
   - Dapat ditambahkan dengan syntax `/`:
   - `text-black/75`: Teks hitam dengan 75% opacity
   - `bg-white/50`: Background putih dengan 50% opacity

2. Custom Colors:
   - Menggunakan bracket syntax: `text-[#FF0000]`
   - RGB: `text-[rgb(255,0,0)]`
   - RGBA: `text-[rgba(255,0,0,0.5)]`

3. Gradient Colors:
   ```jsx
   <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
     Gradient background
   </div>
   ```
   
   Arah gradient:
   - `to-r`: Kiri ke kanan
   - `to-l`: Kanan ke kiri
   - `to-t`: Bawah ke atas
   - `to-b`: Atas ke bawah
   - `to-tr`: Ke arah top-right
   - `to-tl`: Ke arah top-left
   - `to-br`: Ke arah bottom-right
   - `to-bl`: Ke arah bottom-left

## Flexbox dan Grid

### Flexbox Layout
```jsx
<div className="flex items-center justify-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Detail Flexbox Properties:

1. Flex Container:
   - `flex`: Display flex
   - `inline-flex`: Display inline-flex
   - `flex-row`: Horizontal (default)
   - `flex-col`: Vertical
   - `flex-row-reverse`: Horizontal terbalik
   - `flex-col-reverse`: Vertical terbalik

2. Justify Content (Main Axis):
   - `justify-start`: Mulai
   - `justify-end`: Akhir
   - `justify-center`: Tengah
   - `justify-between`: Space between
   - `justify-around`: Space around
   - `justify-evenly`: Space evenly

3. Align Items (Cross Axis):
   - `items-start`: Atas
   - `items-end`: Bawah
   - `items-center`: Tengah
   - `items-baseline`: Baseline
   - `items-stretch`: Stretch

4. Flex Items:
   - `flex-1`: flex: 1 1 0%
   - `flex-auto`: flex: 1 1 auto
   - `flex-initial`: flex: 0 1 auto
   - `flex-none`: flex: none

### Grid Layout
```jsx
<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Detail Grid Properties:

1. Grid Template Columns:
   - `grid-cols-1`: 1 kolom
   - `grid-cols-2`: 2 kolom
   - `grid-cols-3`: 3 kolom
   - `grid-cols-none`: No columns
   - Custom: `grid-cols-[200px_1fr_2fr]`

2. Grid Column Span:
   - `col-span-1`: Span 1 kolom
   - `col-span-2`: Span 2 kolom
   - `col-span-full`: Full width
   - `col-start-{n}`: Start at column n
   - `col-end-{n}`: End at column n

3. Grid Gap:
   - `gap-4`: Gap di semua arah
   - `gap-x-4`: Horizontal gap
   - `gap-y-4`: Vertical gap

## Animations dan Transitions

### Hover Effects
```jsx
<button className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
  Hover Me
</button>
```

Detail Animation Properties:

1. Transition Properties:
   - `transition-none`: No transition
   - `transition-all`: All properties
   - `transition`: Default transitions
   - `transition-colors`: Color only
   - `transition-opacity`: Opacity only
   - `transition-shadow`: Shadow only
   - `transition-transform`: Transform only

2. Duration:
   - `duration-75`: 75ms
   - `duration-100`: 100ms
   - `duration-150`: 150ms
   - `duration-200`: 200ms
   - `duration-300`: 300ms
   - `duration-500`: 500ms
   - `duration-700`: 700ms
   - `duration-1000`: 1000ms

3. Timing Functions:
   - `ease-linear`: Linear
   - `ease-in`: Ease in
   - `ease-out`: Ease out
   - `ease-in-out`: Ease in out

4. Transform:
   - `scale-{n}`: Scale
   - `rotate-{n}`: Rotate
   - `translate-x-{n}`: Move horizontally
   - `translate-y-{n}`: Move vertically
   - `skew-x-{n}`: Skew horizontally
   - `skew-y-{n}`: Skew vertically

## Responsive Design

### Breakpoints
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

Detail Responsive System:

1. Breakpoint Prefixes:
   ```
   Prefix  Minimum width  CSS
   sm      640px         @media (min-width: 640px)
   md      768px         @media (min-width: 768px)
   lg      1024px        @media (min-width: 1024px)
   xl      1280px        @media (min-width: 1280px)
   2xl     1536px        @media (min-width: 1536px)
   ```

2. Mobile First:
   - Styles tanpa prefix adalah default (mobile)
   - Prefix menambahkan styles pada breakpoint dan ke atas
   - Contoh:
     ```jsx
     <div className="
       w-full      // Default: 100% width
       md:w-1/2    // >= 768px: 50% width
       lg:w-1/3    // >= 1024px: 33.33% width
     ">
     ```

3. Responsive Padding/Margin:
   ```jsx
   <div className="
     p-4          // Default: 1rem padding
     md:p-6       // >= 768px: 1.5rem padding
     lg:p-8       // >= 1024px: 2rem padding
   ">
   ```

4. Responsive Layout:
   ```jsx
   <div className="
     grid
     grid-cols-1    // Default: 1 column
     md:grid-cols-2 // >= 768px: 2 columns
     lg:grid-cols-3 // >= 1024px: 3 columns
   ">
   ```

## Components Styling

### Card Component
```jsx
<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      src={imageUrl}
      alt={title}
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <p className="text-[#2d3436] font-bold">{price}</p>
  </div>
</div>
```

Detail Styling Breakdown:

1. Card Container:
   - `bg-white`: Background putih
   - `rounded-lg`: Border radius 0.5rem
   - `shadow-md`: 
     ```css
     box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
                 0 2px 4px -2px rgb(0 0 0 / 0.1);
     ```
   - `hover:shadow-lg`:
     ```css
     box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
                 0 4px 6px -4px rgb(0 0 0 / 0.1);
     ```
   - `transition-shadow`: Transisi smooth untuk shadow
   - `overflow-hidden`: Mencegah content overflow

2. Image Container:
   - `h-48`: Height 12rem (192px)
   - `overflow-hidden`: Mencegah image overflow
   - Image styling:
     - `w-full h-full`: Full width dan height
     - `object-cover`: Maintain aspect ratio
     - `hover:scale-105`: Scale up 5% on hover
     - `transition-transform`: Smooth transform
     - `duration-300`: 300ms duration

3. Content Container:
   - `p-6`: Padding 1.5rem
   - Text styling:
     - `text-xl`: Font size 1.25rem
     - `font-semibold`: Font weight 600
     - `mb-2`: Margin bottom 0.5rem
     - `text-gray-600`: Gray text color
     - `font-bold`: Font weight 700

### Navigation Button
```jsx
<button className="flex items-center gap-2 px-6 py-2 bg-[#2d3436] text-white rounded-full hover:bg-[#1e2122] transition-colors">
  <Icon className="h-5 w-5" />
  <span>Menu Text</span>
</button>
```

Detail Button Styling:

1. Layout:
   - `flex`: Display flex
   - `items-center`: Vertical centering
   - `gap-2`: 0.5rem gap between items

2. Spacing:
   - `px-6`: Horizontal padding 1.5rem
   - `py-2`: Vertical padding 0.5rem

3. Visual:
   - `bg-[#2d3436]`: Custom background color
   - `text-white`: White text
   - `rounded-full`: Fully rounded corners
   - `hover:bg-[#1e2122]`: Darker background on hover
   - `transition-colors`: Smooth color transition

4. Icon:
   - `h-5 w-5`: 1.25rem width dan height

## Tips dan Trik

1. **Consistent Spacing**
   - Gunakan spacing scale yang konsisten (4px increments)
   - Contoh: 4px, 8px, 16px, 24px, 32px, 48px
   - Hindari custom values kecuali benar-benar diperlukan

2. **Color Management**
   - Definisikan colors di tailwind.config.js:
     ```js
     module.exports = {
       theme: {
         extend: {
           colors: {
             primary: '#2d3436',
             secondary: '#1e2122',
             // ...
           }
         }
       }
     }
     ```

3. **Responsive Best Practices**
   - Mobile-first approach
   - Gunakan breakpoints secara bijak
   - Test di berbagai ukuran screen
   - Hindari overflow pada mobile

4. **Performance**
   - Manfaatkan Tailwind's purge untuk production
   - Hindari inline styles
   - Gunakan proper HTML semantics
   - Optimize images

## Kesimpulan

CSS dengan Tailwind memberikan:
1. Rapid development dengan utility-first approach
2. Consistent styling dengan predefined system
3. Responsive design yang mudah diimplementasi
4. Performance optimization dengan purging
5. Maintainable code dengan class-based styling

Dengan mengikuti panduan ini, Anda dapat memahami dan mengimplementasikan styling yang profesional untuk website menu restoran.