# Portfolio Statis — Syukron Mahmudi

Portfolio statis berbasis HTML/CSS/JS vanilla dengan arah visual neo-brutalism editorial.

## Struktur

- `index.html` — markup seluruh halaman
- `styles.css` — layout, warna, tipografi, responsive styling
- `script.js` — satu animasi masuk yang disengaja pada hero
- `assets/` — tempat favicon/SVG/asset tambahan jika diperlukan

## Pendekatan responsif (mobile-first)

`styles.css` disusun **mobile-first**: gaya dasar menargetkan layar kecil, lalu ditingkatkan
lewat media query `min-width`. Tidak ada lagi media query `max-width`.

Urutan lapisan di dalam `styles.css`:

1. **Mobile (base, ≈320px+)** — satu kolom penuh. Header 2 kolom (nama + email), catatan
   lokasi disembunyikan, tanda `S/M` di hero disembunyikan, nomor section tampil di atas konten,
   pilar dan kartu proyek ditumpuk, tombol/link bersuhu sentuh minimal 44px.
2. **Tablet (`min-width: 768px`)** — nomor section pindah ke kolom sendiri (44px), heading
   section jadi baris `flex` (judul di kiri, statistik di kanan), pilar jadi 2 kolom dengan
   "Membangun" membentang penuh, timeline 2 kolom, keahlian + sertifikat berdampingan,
   footer 3 kolom.
3. **Desktop (`min-width: 1024px`)** — komposisi editorial lebar penuh: hero 3 kolom
   (`8% / 1fr / 9%`) dengan tanda `S/M` kembali muncul, about 2 kolom, pilar 3 kolom dengan
   tinggi bertingkat, proyek 2 kolom dengan WeWeb membentang 2 baris, timeline 3 kolom,
   kontak 2 kolom.
4. **Desktop besar (`min-width: 1440px`)** — ukuran teks dasar 18px dan tinggi blok ditambah.

Catatan teknis:

- Tipografi memakai `clamp()` dengan `vw` agar skala mengalir, tetapi ukuran judul di dalam
  kolom sempit (pilar) memakai `vw` kecil supaya kata panjang tidak meluber keluar kotak.
- Efek `hover` pada `.pressable` hanya aktif di perangkat berpointer presisi
  (`@media (hover: hover)`), sehingga tidak "lengket" di layar sentuh.
- `overflow-wrap: anywhere` dipakai pada email panjang agar tidak menyebabkan scroll horizontal.
- `@media (prefers-reduced-motion: reduce)` tetap dihormati.

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
