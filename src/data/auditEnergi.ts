export interface AuditEntry {
  id: string;
  lokasiKategori: string;
  estimasiKonsumsi: string;
  rekomendasiEfisiensi: string;
}

export interface AuditStat {
  id: string;
  label: string;
  value: string;
}

export const auditRumahTangga: AuditEntry[] = [
  {
    id: "rt-1",
    lokasiKategori: "Rumah Tangga Krajan (Contoh)",
    estimasiKonsumsi: "±90 kWh/bulan",
    rekomendasiEfisiensi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus lectus.",
  },
  {
    id: "rt-2",
    lokasiKategori: "Fasilitas Umum (Masjid)",
    estimasiKonsumsi: "±150 kWh/bulan",
    rekomendasiEfisiensi: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  },
];

export const auditUmkm: AuditEntry[] = [
  {
    id: "umkm-1",
    lokasiKategori: "Industri Tahu (Contoh)",
    estimasiKonsumsi: "±400 kWh/bulan",
    rekomendasiEfisiensi: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  },
  {
    id: "umkm-2",
    lokasiKategori: "Warung Kelontong (Contoh)",
    estimasiKonsumsi: "±120 kWh/bulan",
    rekomendasiEfisiensi: "Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.",
  },
];

export const statRumahTangga: AuditStat[] = [
  { id: "rt-total", label: "Rumah Tangga Diaudit", value: "25+" },
  { id: "rt-rata2", label: "Rata-rata Konsumsi/Bulan", value: "±85 kWh" },
];

export const statUmkm: AuditStat[] = [
  { id: "umkm-total", label: "UMKM Diaudit", value: "5" },
  { id: "umkm-rata2", label: "Rata-rata Konsumsi/Bulan", value: "±250 kWh" },
];

export const rekomendasiUmum: string[] = [
  "Matikan lampu dan peralatan elektronik saat tidak digunakan.",
  "Gunakan lampu LED yang lebih hemat listrik dibanding lampu pijar biasa.",
  "Cabut charger dari stopkontak setelah selesai digunakan.",
  "Manfaatkan cahaya matahari alami di siang hari untuk mengurangi pemakaian lampu.",
  "Rawat peralatan listrik secara berkala agar tetap bekerja efisien.",
];
