export interface ManfaatPlts {
  id: string;
  title: string;
  description: string;
  iconSvgPath: string;
}

export interface SpekTeknis {
  id: string;
  label: string;
  value: string;
}

export const pltsStatus = {
  badge: "Rencana Prototipe",
  title: "Prototipe PLTS: Energi Surya untuk Kolam Lele & Hidroponik",
  deskripsi:
    "Panel surya menangkap energi matahari dan disimpan di baterai. Energi ini dipakai untuk dua kebutuhan berbeda sesuai waktu: siang hari menghidupkan pompa air yang mengalirkan air dari kolam lele ke instalasi hidroponik (memanfaatkan unsur hara air kolam untuk menyuburkan tanaman, mirip konsep akuaponik), dan malam hari energi yang sama dialihkan untuk menyalakan lampu penerangan di area kolam.",
  catatanNada:
    "Ini masih tahap rencana/prototipe yang sedang dirintis tim, bukan instalasi permanen yang sudah terpasang dan terbukti berjalan di lapangan.",
};

// Data untuk komponen FlowDiagram.astro
export const pltsFlow = {
  source: ["Panel Surya", "Solar Charge Controller", "Baterai (Aki)"],
  pathA: {
    label: "Siang",
    steps: ["Pompa Air", "Kolam Lele", "Instalasi Hidroponik"],
  },
  pathB: {
    label: "Malam",
    steps: ["Saklar / Relai Otomatis", "Lampu Penerangan"],
  },
};

export const pltsManfaat: ManfaatPlts[] = [
  {
    id: "hemat-energi",
    title: "Hemat Energi",
    description:
      "Memanfaatkan sumber energi terbarukan gratis dari matahari, mengurangi ketergantungan listrik PLN untuk kebutuhan kolam.",
    iconSvgPath: "M13 2 3 14h7l-1 8 11-14h-7l1-6Z",
  },
  {
    id: "menunjang-hidroponik",
    title: "Menunjang Hidroponik",
    description:
      "Air kolam lele yang kaya unsur hara otomatis mengalir ke tanaman hidroponik, mendukung sistem pertanian terintegrasi (akuaponik sederhana).",
    iconSvgPath: "M12 2v6M12 22c4-2 6-6 6-10a6 6 0 1 0-12 0c0 4 2 8 6 10Z",
  },
  {
    id: "penerangan-malam",
    title: "Penerangan Malam Hari",
    description:
      "Energi yang sama dimanfaatkan ulang untuk lampu, mendukung keamanan dan aktivitas warga di sekitar kolam pada malam hari.",
    iconSvgPath:
      "M9 18h6M10 22h4M15 8a3 3 0 1 1-6 0c0-2 1.5-3 1.5-5h3c0 2 1.5 3 1.5 5Z",
  },
];

// Spesifikasi teknis ringkas — ditandai TODO sampai data prototipe final
export const pltsSpesifikasi: SpekTeknis[] = [
  { id: "kapasitas-panel", label: "Kapasitas Panel Surya (Wp)", value: "TODO: 100 Wp" },
  { id: "kapasitas-baterai", label: "Kapasitas Baterai (Ah)", value: "TODO: 50 Ah" },
  { id: "daya-pompa", label: "Daya Pompa Air (Watt)", value: "TODO: 15 Watt" },
  { id: "daya-lampu", label: "Daya Lampu (Watt)", value: "TODO: 10 Watt" },
  {
    id: "jam-pompa",
    label: "Estimasi Jam Operasional Pompa (Siang)",
    value: "TODO: ±8 Jam",
  },
  {
    id: "jam-lampu",
    label: "Estimasi Jam Operasional Lampu (Malam)",
    value: "TODO: ±12 Jam",
  },
];

export const pltsCatatanMekanisme =
  "Perpindahan otomatis dari mode siang (pompa) ke mode malam (lampu) memanfaatkan komponen sederhana seperti timer atau sensor cahaya (LDR) dan relai — cukup sebagai gambaran konsep, tanpa perlu penjelasan rangkaian elektronik mendalam di halaman ini.";

// Placeholder gambar/diagram teknis
export const pltsVisual = {
  src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Instalasi panel surya (PLTS) terapung untuk kolam lele",
};
