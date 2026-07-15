export interface FotoGaleri {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export const galeriList: FotoGaleri[] = [
  {
    id: "galeri-1",
    src: "/images/Penerjunan.jpg",
    alt: "Penerjunan Tim KKN-T 141 Undip di Balai Desa Batursari",
    caption: "Kegiatan penerjunan resmi Tim KKN-Tematik ESDM KKNT-141 Universitas Diponegoro bersama perangkat desa di Balai Desa Batursari.",
  },
  // {
  //   id: "galeri-2",
  //   src: "/images/SowanRT.jpg",
  //   alt: "Koordinasi dan sowan ke jajaran RT dan RW Desa Batursari",
  //   caption: "Momen koordinasi awal dan sowan kewilayahan bersama ketua RT dan RW setempat guna memetakan kondisi serta kebutuhan energi masyarakat desa.",
  // },
  {
    id: "galeri-3",
    src: "https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "TODO: Pemetaan titik potensi biogas",
    caption: "TODO: Diskusi bersama tim geologi untuk memetakan lokasi lahan penempatan reaktor biogas.",
  },
  {
    id: "galeri-4",
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "TODO: Sosialisasi ke kelompok ternak",
    caption: "TODO: Pertemuan sosialisasi bersama kelompok tani dan ternak mengenai manfaat ekonomi biogas.",
  },
  {
    id: "galeri-5",
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "TODO: Perancangan prototipe PLTS",
    caption: "TODO: Tim bersiap menguji coba instalasi panel surya skala kecil untuk kolam lele desa.",
  },
];