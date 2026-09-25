# Portfolio Statis — Syukron Mahmudi

Portfolio statis berbasis HTML/CSS/JS vanilla dengan arah visual neo-brutalism editorial.

## Struktur

- `index.html` — markup seluruh halaman
- `styles.css` — layout, warna, tipografi, responsive styling
- `script.js` — satu animasi masuk yang disengaja pada hero
- `assets/` — tempat favicon/SVG/asset tambahan jika diperlukan

## Menjalankan lokal

Tidak membutuhkan build step.

### Opsi 1 — buka langsung
Buka `index.html` di browser.

### Opsi 2 — local server
Jika Python tersedia:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Deploy

### Netlify
1. Login ke Netlify.
2. Pilih **Add new project** → **Import an existing project** jika memakai repository Git.
3. Pilih repository portfolio.
4. Karena website ini statis tanpa build step, kosongkan Build command.
5. Publish directory: `/`.
6. Deploy.

### Vercel
1. Import repository ke Vercel.
2. Framework preset: **Other** atau biarkan terdeteksi sebagai static.
3. Build command dikosongkan.
4. Output directory `/`.
5. Deploy.

### GitHub Pages
1. Push folder ini ke repository GitHub.
2. Buka **Settings → Pages**.
3. Pilih deployment dari branch utama dan folder `/root`.
4. Simpan lalu tunggu deployment selesai.

## Catatan konten

URL yang memang tersedia pada brief digunakan untuk Alinea Film, GoMad, dan sertifikat EF SET.

Brief tidak memberikan URL spesifik untuk proyek WeWeb, sehingga tidak dibuat URL rekaan. Jika URL WeWeb tersedia, tambahkan sebagai tautan pada blok proyek WeWeb.
