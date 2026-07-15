export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const hero: HeroContent = {
  headline: "Wujudkan Desa Batursari Mandiri Energi Melalui Biogas",
  subheadline:
    "Eksplorasi hasil pemetaan potensi biogas, audit konsumsi energi masyarakat, serta rencana implementasi prototipe PLTS kolam lele oleh Tim KKN-Tematik ESDM KKNT-141 Universitas Diponegoro untuk mendorong kemandirian energi dan keberlanjutan lingkungan di Desa Batursari.",
  ctaPrimary: { label: "Mulai Eksplorasi", href: "#potensi" },
  ctaSecondary: { label: "Pelajari Lebih Lanjut >", href: "#tentang" },
};
