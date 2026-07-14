export interface JabatanDesa {
  id: string;
  nama: string;
  jabatan: string;
  level: number;
  parentId?: string;
  foto?: string;
}

export const strukturDesaList: JabatanDesa[] = [
  // --- Unsur Pimpinan ---
  {
    id: "kepala-desa",
    nama: "TODO: Nama Kepala Desa (Lurah)",
    jabatan: "Kepala Desa (Lurah)",
    level: 1,
  },
  {
    id: "sekretaris-desa",
    nama: "TODO: Nama Sekretaris Desa",
    jabatan: "Sekretaris Desa",
    level: 2,
    parentId: "kepala-desa",
  },

  // --- Unsur Perangkat Desa (Kaur & Kasi) ---
  {
    id: "kaur-pemerintahan",
    nama: "TODO: Nama Kaur Pemerintahan",
    jabatan: "Kaur Pemerintahan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kaur-kesra",
    nama: "TODO: Nama Kaur Pembangunan & Kesra",
    jabatan: "Kaur Pembangunan & Kesra",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kaur-keuangan",
    nama: "TODO: Nama Kaur Keuangan",
    jabatan: "Kaur Keuangan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kaur-umum",
    nama: "TODO: Nama Kaur Umum",
    jabatan: "Kaur Umum",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kasi-pemerintahan",
    nama: "TODO: Nama Kasi Pemerintahan",
    jabatan: "Kasi Pemerintahan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kasi-pelayanan",
    nama: "TODO: Nama Kasi Pelayanan & Kesra",
    jabatan: "Kasi Pelayanan & Kesejahteraan",
    level: 3,
    parentId: "sekretaris-desa",
  },

  // --- Pelaksana Teknis Lapangan ---
  {
    id: "jogobayo",
    nama: "TODO: Nama Jogobayo",
    jabatan: "Jogobayo (Keamanan/Ketertiban)",
    level: 4,
    parentId: "sekretaris-desa",
  },
  {
    id: "ulu-ulu",
    nama: "TODO: Nama Ulu-ulu",
    jabatan: "Ulu-ulu (Pengairan/Pertanian)",
    level: 4,
    parentId: "sekretaris-desa",
  },
  {
    id: "modin",
    nama: "TODO: Nama Modin",
    jabatan: "Modin (Kaum/Rohaniwan)",
    level: 4,
    parentId: "sekretaris-desa",
  },

  // --- Pelaksana Kewilayahan (Dusun) ---
  {
    id: "dusun-daleman",
    nama: "TODO: Nama Kadus Daleman",
    jabatan: "Kepala Dusun Daleman",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-kayon",
    nama: "TODO: Nama Kadus Kayon",
    jabatan: "Kepala Dusun Kayon",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-tlogo",
    nama: "TODO: Nama Kadus Tlogo",
    jabatan: "Kepala Dusun Tlogo",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-pucanggading",
    nama: "TODO: Nama Kadus Pucanggading",
    jabatan: "Kepala Dusun Pucanggading",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-karangjati",
    nama: "TODO: Nama Kadus Karangjati / Karangmalang",
    jabatan: "Kepala Dusun Karangjati",
    level: 5,
    parentId: "kepala-desa",
  },
];
