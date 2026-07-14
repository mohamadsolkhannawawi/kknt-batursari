export interface SiteConfig {
  title: string;
  shortTitle: string;
  description: string;
  lang: string;
  ogImage: string;
  locale: string;
  contact: {
    lokasi: string;
    email?: string;
    whatsapp?: string;
    instagram?: string;
  };
  copyrightYear: number;
}

export const siteConfig: SiteConfig = {
  title: "Peluang Biogas Desa Batursari | KKN-Tematik ESDM UNDIP",
  shortTitle: "Biogas Batursari",
  description:
    "Rangkuman hasil pemetaan potensi biogas, audit energi, dan rencana prototipe PLTS dari program KKN-Tematik ESDM KKNT-141 Universitas Diponegoro di Desa Batursari.",
  lang: "id",
  ogImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
  locale: "id_ID",
  contact: {
    lokasi:
      "Kelurahan Batursari, Kecamatan Mranggen, Kabupaten Demak, Jawa Tengah, 59567",
    email: "kknt141.undip@gmail.com",
    whatsapp: "6281234567890",
    instagram: "kknt141_batursari",
  },
  copyrightYear: 2026,
};
