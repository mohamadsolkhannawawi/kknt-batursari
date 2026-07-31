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
  // 💡 HAPUS KATA KETEKNIKAN -> GANTI RANCANGAN ARSITEKTUR & GAMBAR KERJA
  judul: "Rancangan Arsitektur & Gambar Kerja Instalasi Biogas",
  subjudul: "Perancangan fasilitas instalasi Biogas Skala Rumah Tangga tipe fixed-dome terbenam tanah (underground) yang mencakup Denah, Potongan, dan Visualisasi 3D.",
  deskripsi: [
    "Program ini berfokus pada analisis kebutuhan spasial serta penyusunan gambar kerja desain instalasi biogas tipe fixed-dome guna memberikan panduan standar spesifikasi operasional yang aman bagi masyarakat Desa Batursari.",
    "Rancangan mencakup Gambar Denah Kerja (Skala 1:20), Detail Potongan Melintang Reaktor & Gas Holder, hingga Visualisasi 3D Aksonometri Sistem Terintegrasi dari kandang ternak hingga titik kompor dapur."
  ],
  galeriGambar: [
    {
      src: "/images/biogas-denah.jpg", 
      alt: "Gambar Denah Instalasi Biogas Skala Rumah Tangga",
      caption: "Gambar Denah Struktural Reaktor Fixed-Dome (Bak Inlet, Digester R1400, Outlet Tank, & Twin Slurry Pit)."
    },
    {
      src: "/images/biogas-potongan.jpg", 
      alt: "Gambar Potongan Instalasi Biogas Skala Rumah Tangga",
      caption: "Detail Potongan Melintang Reaktor, Kubah Penampung Gas (Gas Holder), & Fondasi Beton 75mm."
    },
    {
      src: "/images/biogas-3d.jpg", 
      alt: "Gambar 3D Instalasi Biogas Skala Rumah Tangga",
      caption: "Visualisasi 3D Aksonometri Jalur Biogas Terintegrasi dari Kandang Ternak hingga Kompor Dapur."
    }
  ],
  fiturUtama: [
    { 
      judul: "Gambar Denah Kerja (Skala 1:20)", 
      deskripsi: "Gambar detail dimensi Digester (R1400mm), Bak Inlet (900x900mm), Outlet Tank, dan Twin Slurry Pit." 
    },
    { 
      judul: "Detail Potongan Melintang", 
      deskripsi: "Rincian spesifikasi fondasi beton 75mm (1:2:4), ketebalan kubah 400mm, dan kemiringan pipa inlet AW 60°." 
    },
    { 
      judul: "Visualisasi 3D Terintegrasi", 
      deskripsi: "Pemetaan 16 komponen operasional mulai dari mixer, kubah, waterdrain, hingga titik burner kompor dapur." 
    },
    { 
      judul: "Konstruksi Underground Efficient", 
      deskripsi: "Desain terbenam tanah untuk menjaga kestabilan suhu mesofilik (30-38°C) sekaligus menghemat jejak lahan (footprint)." 
    }
  ],
  linkReportase: "https://link-reportase-ebt.com"
};