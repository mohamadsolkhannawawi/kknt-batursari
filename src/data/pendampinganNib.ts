export interface GambarNib {
  src: string;
  alt: string;
  caption: string;
}

export interface PendampinganNibData {
  judul: string;
  subjudul: string;
  deskripsi: string[];
  galeriGambar: GambarNib[];
  linkReportase: string;
}

export const pendampinganNibData: PendampinganNibData = {
  judul: "Sosialisasi & Pendampingan Nomor Induk Berusaha (NIB) UMKM AL HARIS Natural Coffee",
  subjudul: "Pendampingan legalitas dasar usaha bagi pelaku UMKM lokal di Desa Batursari melalui sistem Online Single Submission (OSS) guna meningkatkan kepastian hukum dan daya saing produk.",
  deskripsi: [
    "Pelaku UMKM di lingkungan dusun daleman, khususnya usaha kopi 'AL HARIS Natural Coffee', telah menjalankan usahanya dan memasarkan produk melalui media sosial serta marketplace, namun belum memiliki Nomor Induk Berusaha (NIB) sebagai identitas legalitas dasar.",
    "Berdasarkan UU No. 11 Tahun 2020 jo. UU No. 6 Tahun 2023 tentang Cipta Kerja serta PP No. 5 Tahun 2021 tentang Perizinan Berusaha Berbasis Risiko, kepemilikan NIB melalui sistem Online Single Submission (OSS) menjadi syarat mutlak agar pelaku usaha mendapatkan kepastian hukum dan kemudahan akses pengembangan usaha.",
    "Melalui program ini, mahasiswa memberikan edukasi, memandu pembuatan akun OSS, hingga mendampingi proses pengajuan NIB secara mandiri sehingga pelaku UMKM memiliki legalitas resmi yang memadai untuk mendukung pertumbuhan ekonomi berkelanjutan."
  ],
  galeriGambar: [
    {
      src: "/images/Leaflet NIB (1).png",
      alt: "Leaflet Informasi NIB (Bagian 1: Pengertian, Manfaat, dan Syarat)",
      caption: "Leaflet Edukasi: Penjelasan apa itu NIB, Manfaat, serta Syarat Mengurus NIB."
    },
    {
      src: "/images/Leaflet NIB.png",
      alt: "Leaflet Informasi NIB (Bagian 2: Cara Daftar dan Call to Action)",
      caption: "Leaflet Edukasi: Panduan Langkah-Langkah Cara Daftar NIB via oss.go.id."
    }
  ],
  linkReportase: "https://www.jateng.net/implementasi-sdgs-8-9-dan-16-melalui-pendampingan-legalitas-usaha-dan-digitalisasi-umkm-al-haris-natural-coffee-oleh-mahasiswa-kkn-t-141-universitas-diponegoro/"
};