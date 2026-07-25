export interface AuditHasilDetail {
  id: string;
  areaPemeriksaan: string;
  peralatanUtama: string;
  kondisiLampu: string;
  potensiPenghematan: string;
  rekomendasi: string;
}

export const lokasiAudit = {
  namaFasilitas: "SMP Negeri 3 Mranggen",
  lokasi: "Desa Batursari, Kec. Mranggen",
  timPelaksana: "Tim KKN-T ESDM Undip",
  deskripsi:
    "Kegiatan audit dan konservasi energi yang berfokus pada fasilitas sekolah di SMP Negeri 3 Mranggen Desa Batursari. Penilaian mencakup pengukuran efisiensi penggunaan beban listrik, kelayakan tingkat pencahayaan (Lux), serta analisis potensi konservasi energi untuk mendukung efisiensi operasional sekolah.",
};

// Data Tabel Pengukuran (Siap Diisi Angka Final)
export const hasilAuditList: AuditHasilDetail[] = [
  {
    id: "audit-1",
    areaPemeriksaan: "Ruang Kelas & Lab",
    peralatanUtama: "Lampu Penerangan & Kipas Angin / AC",
    kondisiLampu: "Perlu Optimalisasi LED",
    potensiPenghematan: "Efisien 20-25%",
    rekomendasi:
      "Pengantian ke lampu LED hemat energi dan pemanfaatan pencahayaan alami jendela di siang hari.",
  },
  {
    id: "audit-2",
    areaPemeriksaan: "Ruang Guru & Tata Usaha",
    peralatanUtama: "Komputer, Printer & Perangkat Elektronik",
    kondisiLampu: "Cukup Memadai",
    potensiPenghematan: "Efisien 10-15%",
    rekomendasi:
      "Penerapan SOP pemutusan daya perangkat komputer/printer saat jam pulang kantor/istirahat.",
  },
  {
    id: "audit-3",
    areaPemeriksaan: "Fasilitas Umum & Koridor Sekolah",
    peralatanUtama: "Lampu Penerangan Luar & Selasar",
    kondisiLampu: "Pengoperasian Lampu Manual",
    potensiPenghematan: "Efisien 15%",
    rekomendasi:
      "Pemasangan sensor cahaya (photocell) atau timer otomatis untuk pencahayaan luar area sekolah.",
  },
];

export const rekomendasiUmum: string[] = [
  "Penggunaan lampu LED secara menyeluruh di setiap ruang kelas dan fasilitas pendukung.",
  "Pemanfaatan pencahayaan alami (sinar matahari) secara maksimal pada jam kegiatan belajar mengajar.",
  "Edukasi budaya hemat energi dan penerapan SOP pematikan listrik saat ruangan tidak digunakan.",
  "Penataan skema pencahayaan dan ventilasi udara untuk mengurangi beban penggunaan kipas/pendingin ruangan.",
  "Pemasangan stiker imbauan konservasi energi di setiap titik saklar listrik sekolah.",
];