export interface ArsitekturSampahData {
  kategori: string;
  judul: string;
  subjudul: string;
  deskripsi: string[];
  gambarUtama: {
    src: string;
    alt: string;
    caption: string;
  };
  fiturUtama: {
    judul: string;
    deskripsi: string;
  }[];
  linkReportase: string;
}

export const arsitekturSampahData: ArsitekturSampahData = {
  kategori: "Arsitektur Perilaku Lingkungan",
  judul: "Strategi Arsitektur Perilaku Pengelolaan Sampah Sekolah",
  subjudul: "Intervensi tata ruang, peletakan fasilitas tempat sampah, wayfinding, dan elemen visual 2D/3D untuk mendorong budaya pilah sampah.",
  deskripsi: [
    "Pengelolaan sampah di lingkungan sekolah tidak hanya membutuhkan penyuluhan, melainkan respon tata ruang fisik. Berdasarkan observasi jalur sirkulasi dan perilaku siswa, disusun intervensi arsitektur perilaku.",
    "Rancangan ini mencakup penataan letak wadah sampah yang strategis, sistem wayfinding (petunjuk arah visual), serta elemen grafis 2D dan 3D untuk memicu kebiasaan membuang dan memilah sampah pada tempatnya secara konsisten."
  ],
  gambarUtama: {
    src: "/images/arsitektur-sampah.jpg", // Simpan gambar di public/images/arsitektur-sampah.jpg
    alt: "Desain Arsitektur Perilaku & Penataan Tempat Sampah Sekolah",
    caption: "Rancangan Tata Letak Wadah Sampah, Wayfinding, dan Elemen Visual 2D/3D di Lingkungan Sekolah."
  },
  fiturUtama: [
    { judul: "Analisis Sirkulasi", deskripsi: "Pengamatan jalur pergerakan siswa untuk menentukan titik intervensi fisik paling efektif." },
    { judul: "Penataan Fasilitas", deskripsi: "Desain peletakan tempat sampah yang terjangkau dan intuitif bagi warga sekolah." },
    { judul: "Wayfinding & Visual 2D/3D", deskripsi: "Pemberian petunjuk arah dan grafis edukatif yang memicu kesadaran memilah sampah." },
    { judul: "Replikasi Lingkungan", deskripsi: "Konsep tata ruang yang dapat diterapkan ulang di lingkungan rumah dan masyarakat." }
  ],
  linkReportase: "https://link-reportase-sampah.com"
};