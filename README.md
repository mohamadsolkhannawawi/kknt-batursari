# Website Peluang Biogas — Desa Batursari

Website KKN-Tematik ESDM KKNT-141 Universitas Diponegoro, dibangun dengan
**Astro + Tailwind CSS v4**. Landing page statis (tanpa database/backend),
seluruh konten diambil dari file TypeScript di `src/data/`.

Dibangun mengikuti spesifikasi `PRD-Website-Peluang-Biogas-Batursari.md`.

## 🧞 Menjalankan project

```sh
npm install
npm run dev        # buka http://localhost:4321
```

Perintah lain:

| Command           | Fungsi                                        |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Server pengembangan lokal                     |
| `npm run build`   | Build statis ke folder `dist/` (siap deploy)  |
| `npm run preview` | Preview hasil build sebelum deploy            |
| `npx astro check` | Cek error TypeScript di seluruh file `.astro` |

## 📁 Struktur folder penting

```
src/
├── data/                 # SATU-SATUNYA sumber konten (edit di sini!)
├── components/
│   ├── ui/                # Komponen presentational murni (Button, Card, dst.)
│   ├── layout/             # Navbar, Footer, LogoStrip
│   └── sections/           # 1 file .astro per section landing page
├── layouts/BaseLayout.astro
├── pages/index.astro       # Perakitan seluruh section
├── styles/global.css       # Token warna & font (Tailwind v4 @theme)
└── scripts/reveal.js       # Utility scroll-reveal
```

## ✏️ Cara mengisi data yang masih `TODO`

**Jangan edit file `.astro` untuk mengganti teks/angka.** Semua konten ada di
`src/data/*.ts` — cari komentar `// TODO` di file berikut dan isi sesuai data
lapangan:

| File                 | Yang perlu diisi                                                  |
| -------------------- | ----------------------------------------------------------------- |
| `hero.ts`            | 4 angka statistik ringkasan desa                                  |
| `potensiBiogas.ts`   | Data titik potensi biogas per dusun + peta                        |
| `auditEnergi.ts`     | Data audit rumah tangga & UMKM                                    |
| `prototipePlts.ts`   | Spesifikasi teknis prototipe PLTS                                 |
| `tim.ts`             | NIM/prodi/output 12 anggota (di luar 3 pengembang website)        |
| `dosenPembimbing.ts` | Data DPL — setelah diisi, ubah flag di `navigation.ts`            |
| `strukturDesa.ts`    | Nama perangkat desa — setelah diisi, ubah flag di `navigation.ts` |
| `galeri.ts`          | Ganti path foto placeholder dengan foto dokumentasi asli          |
| `site.config.ts`     | Kontak (WA/email/Instagram/alamat)                                |

### Mengaktifkan section opsional (DPL / Struktur Desa)

Section ini sudah jadi tapi sengaja disembunyikan. Buka
`src/data/navigation.ts`, cari baris section terkait, lalu ubah:

```ts
{ label: "Dosen Pembimbing", href: "#dpl", enabled: false }
```

menjadi `enabled: true` — section otomatis muncul di navbar, footer, dan
halaman tanpa perlu ubah kode lain.

### Mengganti gambar placeholder

File di `public/images/*-placeholder.svg` adalah placeholder sementara.
Ganti file gambar asli dengan nama file yang sama (atau update path-nya di
file data terkait) — format JPG/PNG/WebP semua didukung.

## 🎨 Design system

Warna & font didefinisikan sebagai token di `src/styles/global.css`
(`@theme` block) — dipakai lewat class Tailwind seperti `bg-primary-700`,
`text-primary-900`, dll. Jangan hardcode kode hex baru di komponen; tambahkan
tokennya di `global.css` bila benar-benar perlu warna baru.

## 🚀 Deploy

Project ini 100% statis. Setelah `npm run build`, folder `dist/` bisa
di-deploy ke Netlify, Vercel, GitHub Pages, atau hosting statis apa pun.
