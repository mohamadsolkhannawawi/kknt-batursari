export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const hero: HeroContent = {
  headline: "Wujudkan Desa Batursari Mandiri Energi Melalui Biogas",
  subheadline:
    "Langkah nyata Tim KKN-Tematik ESDM KKNT-141 Kelompok 2 Universitas Diponegoro untuk mewujudkan Desa Batursari Mandiri Energi melalui pemetaan potensi biogas limbah peternakan, audit energi sekolah, pembentukan Tim Hemat Energi, serta digitalisasi data potensi EBT desa",
  ctaPrimary: { label: "Mulai Eksplorasi", href: "#potensi" },
  ctaSecondary: { label: "Pelajari Lebih Lanjut >", href: "#tentang" },
};
