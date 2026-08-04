export interface SkTimHematEnergiData {
  judul: string;
  subjudul: string;
  pdfUrl: string;
  deskripsi: string[];
  gambar: string;
  caption: string;
}

export const skTimHematEnergiData: SkTimHematEnergiData = {
  judul: "Penyusunan Draf SK Pembentukan Tim Hemat Energi & Pedoman Sekolah",
  subjudul: "Penyusunan draf Surat Keputusan (SK) Kepala Sekolah dan pedoman tata tertib hemat energi sebagai landasan legalitas budaya efisiensi energi di SMPN 3 Mranggen.",
  pdfUrl: "/docs/Draf-SK-Tim-Hemat-Energi-SMPN3.pdf", // Path file PDF kamu di folder public
  deskripsi: [
    "Program edukasi hemat energi memerlukan landasan legalitas formal agar kebiasaan baik yang telah ditanamkan kepada siswa dapat terus berjalan secara berkelanjutan meskipun masa KKN telah usai.",
    "Melalui program ini, disusun Berkas Usulan Pembentukan Tim Hemat Energi yang berisi Draf SK Kepala Sekolah, susunan 50 siswa anggota Tim Hemat Energi (perwakilan kelas 9A-9J), serta Pedoman Tata Tertib Hemat Energi dan Kelas Sehat meliputi aturan pemakaian listrik, AC, kebersihan, hingga mekanisme inspeksi harian."
  ],
  gambar: "/images/penyerahan-sk-hemat-energi.jpeg", // Path gambar di folder public/images
  caption: "Dokumen Berkas Usulan Draf SK Pembentukan Tim Hemat Energi & Pedoman Kelas Sehat SMPN 3 Mranggen."
};