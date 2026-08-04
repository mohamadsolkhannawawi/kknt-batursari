export interface SosialisasiHematEnergiData {
  judul: string;
  subjudul: string;
  newsUrl: string;
  deskripsi: string[];
  gambar: string;
  caption: string;
}

export const sosialisasiHematEnergiData: SosialisasiHematEnergiData = {
  judul: "Sosialisasi Transisi Hijau & Pembentukan Tim Hemat Energi",
  subjudul: "Edukasi dan sosialisasi transisi hijau oleh Tim KKNT-141 Kelompok 2 Undip guna mencetak generasi muda yang peduli terhadap efisiensi energi dan kelestarian lingkungan di SMP Negeri 3 Mranggen.",
  newsUrl: "https://jatengvox.com/cetak-generasi-peduli-lingkungan-kknt-141-undip-hadirkan-sosialisasi-transisi-hijau-di-smp-negeri-3-mranggen/", // Sesuaikan URL berita JatengVox jika ada
  deskripsi: [
    "Program Multidisiplin 2 mengintegrasikan pendekatan komunikasi persuasif, analisis dampak ekonomi, dan edukasi lingkungan dalam satu rangkaian sosialisasi bertajuk 'Transisi Hijau Pelajar: Mulai dari Kelas Sehat Menuju Kemandirian Energi'.",
    "Melalui materi 'Hemat Energi Dimulai dari Kita', siswa diajak memahami perilaku hemat energi harian dan dibentuk Tim Hemat Energi beranggotakan 50 siswa (perwakilan kelas IX A-J) sebagai pelopor penghematan di sekolah. Sementara itu, materi 'Energi Hemat, Dompet Selamat, Bumi Sehat' memberikan pemahaman mengenai dampak efisiensi energi terhadap penurunan biaya operasional listrik sekolah maupun rumah tangga."
  ],
  gambar: "/images/SosialisasiSMP3.jpg", // Path foto bersama siswa SMPN 3 di public/images/
  caption: "Mahasiswa KKNT-141 Undip bersama para siswa anggota Tim Hemat Energi SMP Negeri 3 Mranggen usai rangkaian sosialisasi transisi hijau."
};