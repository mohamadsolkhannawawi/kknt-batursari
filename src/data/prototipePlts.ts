export interface ManfaatPlts {
  id: string;
  title: string;
  description: string;
  iconSvgPath: string;
}

export interface SpekTeknis {
  id: string;
  label: string;
  value: string;
}

export const pltsStatus = {
  badge: "Prototipe Edukasi EBT",
  title: "Prototipe Pembangkit Listrik Tenaga Sampah (PLTSa)",
  deskripsi:
    "Rancangan dan peragaan prototipe Pembangkit Listrik Tenaga Sampah (PLTSa) untuk memberikan edukasi interaktif kepada siswa mengenai proses konversi sampah menjadi energi listrik terbarukan.",
  catatanNada:
    "Program Sosial Kemasyarakatan Saintek KKN-T 141 yang diintegrasikan dengan edukasi pengelolaan sampah dan prinsip 3R di sekolah.",
};

// Data Alur Konversi untuk FlowDiagram.astro
export const pltsFlow = {
  source: ["Sampah / Limbah Organik", "Proses Konversi Termal", "Generator Listrik PLTSa"],
  pathA: {
    label: "Proses Konversi",
    steps: ["Pemilahan Sampah", "Proses Konversi Termal", "Pembangkitan Daya"],
  },
  pathB: {
    label: "Luaran & Edukasi",
    steps: ["Energi Listrik Alternatif", "Demonstrasi Kebersihan & 3R"],
  },
};

// Kartu Manfaat Poin Utama
export const pltsManfaat: ManfaatPlts[] = [
  {
    id: "solusi-sampah",
    title: "Pengelolaan Sampah",
    description:
      "Mengenalkan pemanfaatan sampah agar tidak menumpuk dan mencemari lingkungan sekolah.",
    iconSvgPath:
      "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  },
  {
    id: "energi-terbarukan",
    title: "Konversi Energi Listrik",
    description:
      "Demonstrasi langsung cara kerja perubahan potensi limbah menjadi sumber energi listrik terbarukan.",
    iconSvgPath: "M13 2 3 14h7l-1 8 11-14h-7l1-6Z",
  },
  {
    id: "edukasi-siswa",
    title: "Edukasi Interaktif Siswa",
    description:
      "Menumbuhkan ketertarikan siswa terhadap inovasi Energi Baru Terbarukan (EBT) sejak dini.",
    iconSvgPath:
      "M9 18h6M10 22h4M15 8a3 3 0 1 1-6 0c0-2 1.5-3 1.5-5h3c0 2 1.5 3 1.5 5Z",
  },
];

// Ringkasan Spesifikasi & Informasi Program (Sesuai LRK)
export const pltsSpesifikasi: SpekTeknis[] = [
  { id: "kategori", label: "Kategori Program", value: "Sosial Kemasyarakatan Saintek" },
  { id: "sasaran", label: "Kelompok Sasaran", value: "Siswa & Warga Sekolah" },
  { id: "pelaksana", label: "Tim Pelaksana", value: "Syahmi Al Qalby & Bagas Ariyanto" },
  { id: "metode", label: "Metode Pelaksanaan", value: "Demonstrasi & Peragaan Alat" },
  { id: "luaran", label: "Bentuk Luaran", value: "Prototipe Alat & Edukasi EBT" },
  { id: "fokus", label: "Fokus Inovasi", value: "Konversi Sampah ke Energi Listrik" },
];

export const pltsCatatanMekanisme =
  "Demonstrasi prototipe PLTSa ini dirancang sebagai media pembelajaran praktis guna meningkatkan pemahaman siswa mengenai pengelolaan lingkungan dan energi bersih.";

export const pltsVisual = {
  src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Dokumentasi Peragaan Prototipe Pembangkit Listrik Tenaga Sampah (PLTSa)",
};