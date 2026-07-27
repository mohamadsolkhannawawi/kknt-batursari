export interface GambarEbt {
  src: string;
  alt: string;
  caption: string;
}

export interface DesainEbtData {
  kategori: string;
  judul: string;
  subjudul: string;
  deskripsi: string[];
  galeriGambar: GambarEbt[];
  fiturUtama: {
    judul: string;
    deskripsi: string;
  }[];
  linkReportase: string;
}

export const desainEbtData: DesainEbtData = {
  kategori: "Desain Fasilitas EBT (Multidisiplin 1)",
  judul: "Rancangan Arsitektur & Desain 2D/3D Instalasi Biogas",
  subjudul: "Perancangan teknis instalasi Biogas Skala Rumah Tangga yang mencakup Denah, Potongan, dan Visualisasi 3D di Desa Batursari.",
  deskripsi: [
    "Program ini berfokus pada survei lokasi, analisis kebutuhan spasial, serta perancangan teknis instalasi biogas untuk memastikan sistem dapat beroperasi secara optimal dan aman bagi masyarakat.",
    "Rancangan mencakup Gambar Denah Struktural (Skala 1:20), Potongan Detail Reaktor/Digester & Gas Holder, hingga Visualisasi 3D Sistem Terintegrasi dari kandang ternak hingga saluran kompor biogas."
  ],
  galeriGambar: [
    {
      src: "/images/biogas-denah.jpg", // Gambar dari BIOGAS 1.pdf
      alt: "Denah Instalasi Biogas Skala 1:20",
      caption: "Denah Struktural Instalasi Biogas (Digester, Outlet Tank, & Slurry Pit)."
    },
    {
      src: "/images/biogas-potongan.jpg", // Gambar dari BIOGAS 2.pdf
      alt: "Potongan Instalasi Biogas Skala 1:20",
      caption: "Detail Potongan Melintang Reaktor, Gas Holder, & Saluran Pipa Biogas."
    },
    {
      src: "/images/biogas-3d.jpg", // Gambar dari BIOGAS 3.pdf
      alt: "3D Instalasi Biogas Terintegrasi",
      caption: "Model 3D Aksonometri Jalur Biogas dari Kandang Ternak hingga Kompor Dapur."
    }
  ],
  fiturUtama: [
    { judul: "Denah Kerja (Skala 1:20)", deskripsi: "Gambar teknis dimensi Digester (R1400), Outlet Tank, dan Slurry Pit." },
    { judul: "Detail Potongan Melintang", deskripsi: "Rincian ketebalan fondasi concrete 75mm, Gas Holder, dan kemiringan pipa inlet 60°." },
    { judul: "Visualisasi 3D Terintegrasi", deskripsi: "Pemetaan 16 komponen instalasi mulai dari mixer, kubah, waterdrain hingga titik kompor." },
    { judul: "Panduan Implementasi", deskripsi: "Spesifikasi material brick masonry wall 1:3 untuk daya tahan reaktor jangka panjang." }
  ],
  linkReportase: "https://link-reportase-ebt.com"
};