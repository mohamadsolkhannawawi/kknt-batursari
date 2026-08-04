export interface PetaAdministrasiData {
  judul: string;
  subjudul: string;
  pdfUrl?: string;
  deskripsi: string[];
  gambar: string;
  caption: string;
}

export const petaAdministrasiData: PetaAdministrasiData = {
  judul: "Peta Administrasi dan Fasilitas Publik Desa Batursari",
  subjudul: "Penyusunan peta geospasial terpadu berbasis data geografi dan sistem peta digital guna mendukung tata kelola wilayah, perencanaan pembangunan, serta kemudahan akses fasilitas publik Desa Batursari.",
  pdfUrl: "/docs/Peta-Administrasi-Desa-Batursari.pdf", // Simpan file PDF peta di folder public/docs/
  deskripsi: [
    "Ketersediaan peta administrasi spasial yang akurat merupakan elemen vital dalam penyelenggaraan tata kelola wilayah dan pelayanan publik di tingkat desa. Peta Administrasi Desa Batursari ini memvisualisasikan pembagian wilayah dusun secara komprehensif, mulai dari Dusun Mondosari, Gebangsari, Gembyong, Kadungwringin, Wates, Daleman, Pucanggading, Pilang, Kopen, Tlogo, Dongko, Karangmalang, Karangjati, Batusari, hingga Karanggeneng Kayon.",
    "Selain memetakan batas administrasi, kontur wilayah, serta jaringan jalan dan sungai utama, peta ini memuat persebaran fasilitas umum secara detail. Terdata secara terstruktur lokasi Balai Desa Batursari, tempat ibadah utama (seperti Masjid Uswah Hasanah, Jami' Nurul Ulum, Baitul Mukminin, dan Al-Ikhsan Karangmalang), sarana kesehatan (Puskesmas 3 Mranggen), pusat ekonomi (Pasar Krempyeng), sarana olahraga (Lapangan TVRI Pucanggading & Lapangan Daleman Batursari), hingga Kawasan Kampus Terpadu yang mencakup SMAN 2 Mranggen, SMPN 3 Mranggen, serta sebaran Sekolah Dasar Negeri dari SDN 01 hingga SDN 07 Batursari.",
    "Melalui pemetaan spasial ini, Pemerintah Desa Batursari beserta masyarakat memperoleh basis data geografis yang presisi untuk mempermudah navigasi warga, pendataan aset desa, penyusunan rencana tata ruang dan infrastruktur, hingga integrasi rujukan jalur evakuasi bencana secara terukur dan berkelanjutan."
  ],
  gambar: "/images/peta-administrasi-batursari.jpg", // Simpan file gambar peta ini di folder public/images/
  caption: "Peta Administrasi dan Fasilitas Publik Desa Batursari, Kecamatan Mranggen, Kabupaten Demak (Skala 1:20.000)."
};