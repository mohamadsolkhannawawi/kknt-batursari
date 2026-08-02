export interface ProgramCard {
  id: string;
  title: string;
  iconSvgPath: string;
  bullets: string[];
}

export const programCards: ProgramCard[] = [
  {
    id: "multi disiplin-1",
    title: "Audit Energi Sederhana & Pemetaan EBT Lokal",
    iconSvgPath:
      "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
    bullets: [
      "Perhitungan beban peralatan listrik dan analisis penggunaan energi di lingkungan SMP Negeri 3 Mranggen",
      "Survei lapangan dan pemetaan jaringan potensi biogas berbasis limbah peternakan di Dusun Ndaleman.",
      "Pengembangan Website Peluang dan Potensi EBT Desa Batursari sebagai media publikasi dan edukasi terpusat.",
    ],
  },
  {
    id: "multi disiplin-2",
    title: "Pembentukan Tim Hemat Energi & Kelembagaan",
    iconSvgPath:
      "M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M11 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    bullets: [
      "Pelatihan komunikasi persuasif, pembuatan branding/slogan, serta sosialisasi EBT bagi siswa/siswi SMP Negeri 3 Mrangen.",
      "Penyusunan logbook monitoring energi harian, indikator kelas sehat, dan program apresiasi siswa.",
      "Penyusunan draf SK Pembentukan Tim Hemat Energi Sekolah beserta tata tertib resmi yang mengikat.",
    ],
  },
];