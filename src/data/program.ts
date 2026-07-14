export interface ProgramCard {
  id: string;
  title: string;
  iconSvgPath: string;
  bullets: string[];
}

export const programCards: ProgramCard[] = [
  {
    id: "multi-1",
    title: "Audit Energi & Pemetaan Peluang EBT",
    iconSvgPath:
      "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
    bullets: [
      "Mengaudit konsumsi energi rumah tangga, fasilitas umum, dan UMKM di Desa Batursari.",
      "Memetakan jalur saluran biogas potensial dan kondisi lahan bersama Tim Geologi.",
      "Mengkaji volume limbah ternak sebagai bahan baku biogas bersama Tim Peternakan.",
    ],
  },
  {
    id: "multi-2",
    title: "Tim Hemat Energi & Sosialisasi",
    iconSvgPath:
      "M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M11 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    bullets: [
      "Menyosialisasikan hasil audit energi dan potensi biogas ke warga, karang taruna, dan kelompok tani/ternak.",
      "Menyusun materi edukasi hemat energi berbasis pre-test/post-test.",
      "Mendorong pembentukan Tim Hemat Energi Desa sebagai kelembagaan berkelanjutan.",
    ],
  },
];
