export interface Partner {
  id: string;
  nama: string;
  logoImport: string;
  alt: string;
}

export const partners: Partner[] = [
  {
    id: "undip",
    nama: "Universitas Diponegoro",
    logoImport: "../assets/images/logo-undip.png",
    alt: "Logo Universitas Diponegoro",
  },
  {
    id: "kemendiktisaintek",
    nama: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi",
    logoImport: "../assets/images/logo-kemendiktisaintek.png",
    alt: "Logo Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Diktisaintek Berdampak)",
  },
  {
    id: "kkn-t-141",
    nama: "KKN-T 141 Desa Batursari",
    logoImport: "../assets/images/logo-kkn.jpg",
    alt: "Logo KKN-Tematik 141 Universitas Diponegoro Desa Batursari",
  },
];

export const logoStripCaption = "Program KKN-Tematik ESDM didukung oleh";
