# Cantika Website

Website personal yang dibuat dengan HTML dan Tailwind CSS v3.4.14.

## Setup

### Prerequisites
- Node.js dan npm terinstall di sistem Anda

### Instalasi
1. Clone atau download proyek ini
2. Buka terminal di direktori proyek
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Build CSS
Untuk build CSS sekali:
```bash
npm run build-css
```

### Watch Mode
Untuk development dengan auto-rebuild CSS saat ada perubahan:
```bash
npm run dev
```
atau
```bash
npm run watch-css
```

## Struktur Proyek

```
cantika/
├── src/
│   └── input.css          # File CSS input dengan custom styles
├── dist/
│   └── output.css         # File CSS output yang di-generate Tailwind
├── asset/
│   └── cantika.jpg        # Gambar profil
├── cantika.html           # File HTML utama
├── tailwind.config.js     # Konfigurasi Tailwind CSS
├── postcss.config.js      # Konfigurasi PostCSS
├── package.json           # Konfigurasi npm dan scripts
└── README.md             # Dokumentasi ini
```

## Custom Colors

Website ini menggunakan warna-warna khusus yang didefinisikan di `src/input.css`:

- `soft-terracotta`: #E6A88F
- `peach`: #F8C4B4  
- `sage-green`: #B8C4A4
- `dusty-blue`: #A4B8C4

## Custom Styles

- `.slow-fade`: Animasi transisi halus
- `.nav-link:hover`: Efek hover untuk navigasi
- `.btn:active`: Efek klik untuk tombol

## Tailwind CSS v3

Proyek ini menggunakan Tailwind CSS versi 3.4.14 yang memiliki fitur:
- Konfigurasi melalui file `tailwind.config.js`
- Kompatibilitas yang sangat baik dengan berbagai platform
- Dukungan komunitas yang luas
- Stabilitas untuk production

## Browser Support

Website ini kompatibel dengan browser modern yang mendukung CSS custom properties.
