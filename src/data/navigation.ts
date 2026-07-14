export interface NavItem {
  label: string;
  href?: string;
  enabled: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Beranda", href: "#beranda", enabled: true },
  { 
    label: "Program", 
    enabled: true,
    children: [
      { label: "Tentang Program", href: "#tentang", enabled: true },
      { label: "Potensi Biogas", href: "#potensi", enabled: true },
      { label: "Audit Energi", href: "#audit", enabled: true },
      { label: "PLTS Kolam Lele", href: "#plts", enabled: true },
    ]
  },
  { 
    label: "Edukasi", 
    enabled: true,
    children: [
      { label: "Bagaimana Biogas Bekerja", href: "#skema", enabled: true }
    ]
  },
  { 
    label: "Tentang Kami", 
    enabled: true,
    children: [
      { label: "Tim", href: "#tim", enabled: true },
      { label: "Galeri", href: "#galeri", enabled: true },
      { label: "Kontak", href: "#kontak", enabled: true },
      { label: "Struktur Desa", href: "#struktur-desa", enabled: true },
      { label: "Dosen Pembimbing", href: "#dpl", enabled: true },
    ]
  }
];

// CTA khusus di navbar kanan (PRD 5.1)
export const navbarCta = {
  label: "Lihat Peta Potensi",
  href: "#potensi",
};

export const footerNavigation: NavItem[] = navigation.filter(
  (item) => item.href !== "#beranda",
);
