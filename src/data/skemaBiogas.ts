export interface LangkahPOC {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
}

export const langkahPocList: LangkahPOC[] = [
  {
    id: "step-1",
    nomor: "01",
    judul: "Pengumpulan Bahan Baku",
    deskripsi:
      "Mengumpulkan limbah peternakan, bioaktivator, dan sumber karbon sebagai bahan utama POC.",
  },
  {
    id: "step-2",
    nomor: "02",
    judul: "Formulasi & Fermentasi",
    deskripsi:
      "Merancang komposisi serta mengontrol kondisi fermentasi bakteri pengurai.",
  },
  {
    id: "step-3",
    nomor: "03",
    judul: "Penyaringan & Modul 3R",
    deskripsi:
      "Penyaringan pupuk cair serta penyusunan panduan praktis dan infografis pembuatan POC.",
  },
  {
    id: "step-4",
    nomor: "04",
    judul: "Pemanfaatan Sektor Pertanian",
    deskripsi:
      "Implementasi prinsip Recycle (3R) untuk meningkatkan kesuburan tanah dan tanaman.",
  },
];

export const pocSummary = {
  title: "Edukasi & Pembuatan Pupuk Organik Cair (POC)",
  deskripsi:
    "Program Sosial Kemasyarakatan dalam mengolah limbah peternakan dengan prinsip 3R (Recycle) menjadi Pupuk Organik Cair guna mendukung sektor pertanian dan lingkungan Desa Batursari.",
};

export const dokumentasiPoc = {
  src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Dokumentasi Pelaksanaan Program dan Hasil Produk POC Desa Batursari",
};

export const penjelasanKegiatanPoc = [
  "Program Sosial Kemasyarakatan ini dilaksanakan oleh Tim KKN-T Undip untuk mengedukasi masyarakat mengenai pemanfaatan limbah peternakan sebagai bahan baku Pupuk Organik Cair (POC). Kegiatan mencakup perancangan formula bahan, pengontrolan fermentasi, hingga penyusunan modul panduan praktis 3R.",
  "Melalui pendekatan edukatif yang mudah dipahami, warga diajak untuk menerapkan prinsip Recycle dalam mengolah limbah organik, sehingga mampu menghasilkan pupuk ramah lingkungan yang bermanfaat langsung bagi sektor pertanian desa.",
];