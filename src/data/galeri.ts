export interface FotoGaleri {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  linkNews?: {
    url: string;
    label: string;
  };
}

export const galeriList: FotoGaleri[] = [
  {
    id: "galeri-1",
    src: "/images/Penerjunan.jpg",
    alt: "Penerjunan Tim KKN-T 141 Undip di Balai Desa Batursari",
    caption: "Kegiatan penerjunan resmi Tim KKN-Tematik ESDM KKNT-141 Universitas Diponegoro bersama perangkat desa di Balai Desa Batursari.",
  },
  {
    id: "galeri-2",
    src: "/images/SowanRT.jpg",
    alt: "Koordinasi dan sowan ke jajaran RT dan RW Desa Batursari",
    caption: "Momen koordinasi awal dan sowan kewilayahan bersama ketua RT dan RW setempat guna memetakan kondisi serta kebutuhan energi masyarakat desa.",
  },
  {
    id: "galeri-3",
    src: "/images/Senam.jpg",
    alt: "Kegiatan senam sehat bersama ibu-ibu RT di Desa Batursari",
    caption: "Meningkatkan keakraban dan kebersamaan melalui kegiatan senam sehat bersama ibu-ibu RT setempat guna menjaga kebugaran jasmani warga Desa Batursari.",
  },
  {
    id: "galeri-4",
    src: "/images/POC.jpg",
    alt: "Proses pembuatan dan produksi Pupuk Organik Cair (POC) Desa Batursari",
    caption: "Proses pengolahan dan pencampuran bahan baku dalam pembuatan Pupuk Organik Cair (POC) secara mandiri guna mengoptimalkan potensi limbah organik di Desa Batursari.",
  },
  {
    id: "galeri-5",
    src: "/images/SosialisasiSMP3.jpg",
    alt: "Sosialisasi Transisi Hijau di SMP Negeri 3 Mranggen",
    caption: "Edukasi dan sosialisasi transisi hijau oleh Tim KKNT-141 Undip guna mencetak generasi muda yang peduli terhadap kelestarian lingkungan di SMP Negeri 3 Mranggen.",
    linkNews: {
      url: "https://jatengvox.com/cetak-generasi-peduli-lingkungan-kknt-141-undip-hadirkan-sosialisasi-transisi-hijau-di-smp-negeri-3-mranggen/",
      label: "Baca berita selengkapnya di JatengVox",
    },
  },
];