export interface NavItem {
  label: string;
  href?: string;
  enabled: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Beranda", href: "#beranda", enabled: true },
  { 
    label: "Profil Desa", 
    enabled: true,
    children: [
      { label: "Struktur Desa", href: "#struktur-desa", enabled: true },
      { label: "Tentang Program", href: "#tentang", enabled: true },
      { label: "Peta Administrasi", href: "#peta-administrasi", enabled: true },
    ]
  },
  { 
    label: "Inovasi EBT", 
    enabled: true,
    children: [
      { label: "Potensi Biogas", href: "#potensi", enabled: true },
      { label: "Desain EBT", href: "#desain-ebt", enabled: true },
      { label: "Monitoring Biogas", href: "#monitoring-biogas", enabled: true }, 
      { label: "Monograf Biogas", href: "#monograf", enabled: true },
    ]
  },
  { 
    label: "Edukasi & Aksi", 
    enabled: true,
    children: [
      { label: "Audit Energi", href: "#audit", enabled: true },
      { label: "Sosialisasi & Edukasi POC", href: "#poc", enabled: true },
      { label: "Prototipe PLTSa", href: "#pltsa", enabled: true },
      { label: "Arsitektur Sampah", href: "#sampah", enabled: true },
      { label: "Sosialisasi Hemat Energi", href: "#sosialisasi-hemat-energi", enabled: true },
      { label: "SK Tim Hemat Energi", href: "#sk-hemat-energi", enabled: true },
      { label: "Sosialisasi Anti Bullying", href: "#sosialisasi-bullying", enabled: true },
    ]
  },
  { 
    label: "UMKM", 
    enabled: true,
    children: [
      { label: "Branding UMKM Roti Bakar 86", href: "#branding-umkm", enabled: true },
      { label: "E-Catalogue UMKM Roti Bakar 86", href: "#ecatalogue", enabled: true }, 
      { label: "E-Catalogue Al Haris Coffee", href: "#catalog-kopi", enabled: true },
      { label: "Pemasaran STP Roti Bakar 86", href: "#pemasaran-stp", enabled: true },
      { label: "Pendampingan NIB Al Haris Coffee", href: "#pendampingan-nib", enabled: true },
    ]
  },
  { 
    label: "Tim & Galeri", 
    enabled: true,
    children: [
      { label: "Dosen Pembimbing", href: "#dpl", enabled: true },
      { label: "Tim Pengembang", href: "#tim", enabled: true },
      { label: "Galeri", href: "#galeri", enabled: true },
      { label: "Kontak", href: "#kontak", enabled: true },
      { label: "Pengembang Website", href: "#pengembang-website", enabled: true },
    ]
  }
];

export const navbarCta = {
  label: "Peta Potensi",
  href: "#potensi",
};

export const footerNavigation: NavItem[] = navigation.filter(
  (item) => item.href !== "#beranda",
);