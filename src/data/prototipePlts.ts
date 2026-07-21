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
  title: "Prototipe PLTS Atap (PLTS A): Energi Surya untuk Fasilitas Publik",
  deskripsi:
    "Panel surya yang dipasang di atap bangunan (PLTS Atap) menyerap energi matahari dan menyimpannya ke baterai. Energi bersih ini dimanfaatkan untuk mendukung kebutuhan daya penerangan dan operasional peralatan listrik fasilitas publik secara ramah lingkungan serta efisien.",
  catatanNada:
    "Ini masih tahap rencana/prototipe yang sedang dirintis tim, bukan instalasi permanen yang sudah terpasang dan terbukti berjalan di lapangan.",
};

// Data untuk komponen FlowDiagram.astro
export const pltsFlow = {
  source: ["Panel Surya Atap", "Solar Charge Controller", "Baterai (Aki / Baterai Lithium)"],
  pathA: {
    label: "Siang",
    steps: ["Pengisian Baterai", "Inverter", "Beban Operasional Siang"],
  },
  pathB: {
    label: "Malam",
    steps: ["Saklar / Sensor Otomatis", "Inverter", "Penerangan Fasilitas Publik"],
  },
};

export const pltsManfaat: ManfaatPlts[] = [
  {
    id: "hemat-energi",
    title: "Efisiensi Energi & Biaya",
    description:
      "Memanfaatkan sumber energi terbarukan gratis dari sinar matahari untuk mengurangi konsumsi listrik jaringan PLN pada fasilitas publik.",
    iconSvgPath: "M13 2 3 14h7l-1 8 11-14h-7l1-6Z",
  },
  {
    id: "ebt-ramah-lingkungan",
    title: "Energi Bersih Terbarukan",
    description:
      "Mendukung pengurangan emisi karbon melalui pemanfaatan ruang atap bangunan yang optimal sebagai sumber energi hijau mandiri.",
    iconSvgPath: "M12 2v6M12 22c4-2 6-6 6-10a6 6 0 1 0-12 0c0 4 2 8 6 10Z",
  },
  {
    id: "penerangan-mandiri",
    title: "Keandalan Sistem Penerangan",
    description:
      "Menyediakan cadangan daya listrik untuk penerangan area publik sehingga fasilitas tetap terang dan aman digunakan pada malam hari.",
    iconSvgPath:
      "M9 18h6M10 22h4M15 8a3 3 0 1 1-6 0c0-2 1.5-3 1.5-5h3c0 2 1.5 3 1.5 5Z",
  },
];

// Spesifikasi teknis ringkas — ditandai TODO sampai data prototipe final
export const pltsSpesifikasi: SpekTeknis[] = [
  { id: "kapasitas-panel", label: "Kapasitas Panel Surya (Wp)", value: "TODO: 100 Wp" },
  { id: "kapasitas-baterai", label: "Kapasitas Baterai (Ah)", value: "TODO: 50 Ah" },
  { id: "daya-beban", label: "Daya Beban Penerangan (Watt)", value: "TODO: 20 Watt" },
  { id: "kapasitas-inverter", label: "Kapasitas Inverter (Watt)", value: "TODO: 300 Watt" },
  {
    id: "jam-siang",
    label: "Estimasi Operasional / Pengisian (Siang)",
    value: "TODO: ±6-8 Jam",
  },
  {
    id: "jam-malam",
    label: "Estimasi Jam Operasional Penerangan (Malam)",
    value: "TODO: ±12 Jam",
  },
];

export const pltsCatatanMekanisme =
  "Sistem PLTS Atap bekerja secara otomatis dengan menyalurkan energi surya untuk mengisi baterai di siang hari dan mendistribusikannya melalui inverter/relai otomatis ke lampu penerangan atau beban listrik publik di malam hari.";

// Placeholder gambar/diagram teknis PLTS Atap
export const pltsVisual = {
  src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Instalasi Panel Surya Atap (PLTS A) untuk fasilitas umum",
};