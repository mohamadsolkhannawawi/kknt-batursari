export interface LangkahPOC {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
}

export interface GambarPOC {
  src: string;
  alt: string;
  caption: string;
}

export const langkahPocList: LangkahPOC[] = [
  {
    id: "step-1",
    nomor: "01",
    judul: "Pengenalan Bahan Baku",
    deskripsi:
      "Penyampaian materi mengenai jenis limbah organik, fungsi bioaktivator, dan sumber karbon pembuatan POC.",
  },
  {
    id: "step-2",
    nomor: "02",
    judul: "Edukasi Formulasi & Fermentasi",
    deskripsi:
      "Penjelasan takaran komposisi ideal serta prinsip kerja proses fermentasi mikroorganisme pengurai.",
  },
  {
    id: "step-3",
    nomor: "03",
    judul: "Penyusunan Modul & Panduan 3R",
    deskripsi:
      "Penyusunan serta pembagian modul panduan praktis dan infografis edukatif pembuatan POC bagi siswa.",
  },
  {
    id: "step-4",
    nomor: "04",
    judul: "Pemanfaatan & Aksi Lingkungan",
    deskripsi:
      "Mendorong kesadaran siswa dalam menerapkan prinsip Recycle (3R) untuk mendukung kelestarian lingkungan sekolah.",
  },
];

export const pocSummary = {
  title: "Sosialisasi & Edukasi Pupuk Organik Cair (POC)",
  deskripsi:
    "Program edukasi pengolahan limbah organik berbasis prinsip 3R (Recycle) menjadi Pupuk Organik Cair yang dilaksanakan bagi para siswa di SMP Negeri 3 Mranggen.",
};

// GALERI GAMBAR SLIDER (SLIDE 1: HASIL POC, SLIDE 2: SOSIALISASI SMPN 3 MRANGGEN)
export const galeriGambarPoc: GambarPOC[] = [
  {
    src: "/images/hasil-poc.jpg", // Simpan gambar produk POC di folder public/images/
    alt: "Hasil Produk Pupuk Organik Cair (POC)",
    caption: "Produk Pupuk Organik Cair (POC) Hasil Olahan Limbah Organik.",
  },
  {
    src: "/images/sosialisasi-poc.JPG", 
    alt: "Sosialisasi Pupuk Organik Cair di SMP Negeri 3 Mranggen",
    caption:
      "Sosialisasi pemanfaatan Pupuk Organik Cair (POC) dan penerapan prinsip 3R bersama siswa SMP Negeri 3 Mranggen.",
  },
];

export const penjelasanKegiatanPoc = [
  "Program Edukasi Lingkungan ini dilaksanakan oleh Tim KKN-T Undip di SMP Negeri 3 Mranggen untuk mengedukasi para siswa mengenai potensi pemanfaatan limbah organik menjadi Pupuk Organik Cair (POC). Kegiatan difokuskan pada penyampaian materi interaktif, pemahaman konsep fermentasi, hingga pembagian modul panduan praktis berbasis prinsip 3R.",
  "Melalui sosialisasi ini, para siswa diajak untuk lebih peduli terhadap lingkungan sekitar dengan menerapkan prinsip Recycle dalam mengolah sampah organik, sehingga dapat menumbuhkan kesadaran menjaga kebersihan dan kelestarian lingkungan sekolah sejak dini.",
];

// Link artikel reportase (sesuaikan dengan link asli jika artikel sudah rilis)
export const linkReportasePoc = "https://link-reportase-poc-kamu.com";