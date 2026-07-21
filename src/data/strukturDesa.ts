export interface JabatanDesa {
  id: string;
  nama: string;
  jabatan: string;
  level: number;
  parentId?: string;
  foto?: string;
}

// Data Struktur Organisasi Perangkat Desa (Sesuai Bagan Official)
export const strukturDesaList: JabatanDesa[] = [
  // --- Unsur Pimpinan ---
  {
    id: "kepala-desa",
    nama: "Sutikno, SE",
    jabatan: "Kepala Desa",
    level: 1,
  },
  {
    id: "sekretaris-desa",
    nama: "Maghfurin, S.Kom",
    jabatan: "Sekretaris Desa",
    level: 2,
    parentId: "kepala-desa",
  },

  // --- Kasi (Seksi) ---
  {
    id: "kasi-pemerintahan",
    nama: "Nasokha, S.Sos",
    jabatan: "Kasi Pemerintahan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kasi-kesejahteraan",
    nama: "Sartono",
    jabatan: "Kasi Kesejahteraan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kasi-pelayanan",
    nama: "Ali Imron",
    jabatan: "Kasi Pelayanan",
    level: 3,
    parentId: "sekretaris-desa",
  },

  // --- Kaur (Urusan) ---
  {
    id: "kaur-tu-umum",
    nama: "Arika Hanik, SH",
    jabatan: "Kaur Tata Usaha dan Umum",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kaur-keuangan",
    nama: "Munawar",
    jabatan: "Kaur Keuangan",
    level: 3,
    parentId: "sekretaris-desa",
  },
  {
    id: "kaur-perencanaan",
    nama: "Nur Alimin, A.Md",
    jabatan: "Kaur Perencanaan",
    level: 3,
    parentId: "sekretaris-desa",
  },

  // --- Staf Perangkat Desa ---
  {
    id: "staf-pemerintahan",
    nama: "Ihanatus Sa'adah, S.Pd",
    jabatan: "Staf Kasi Pemerintahan",
    level: 4,
    parentId: "kasi-pemerintahan",
  },
  {
    id: "staf-pelayanan",
    nama: "Maghfurin, S.Kom",
    jabatan: "Staf Kasi Pelayanan",
    level: 4,
    parentId: "kasi-pelayanan",
  },
  {
    id: "staf-tu-umum",
    nama: "Yuliantiningsih",
    jabatan: "Staf Kaur Tata Usaha & Umum",
    level: 4,
    parentId: "kaur-tu-umum",
  },
  {
    id: "staf-keuangan",
    nama: "Yulianti",
    jabatan: "Staf Kaur Keuangan",
    level: 4,
    parentId: "kaur-keuangan",
  },
  {
    id: "staf-perencanaan",
    nama: "Hadiyatul M",
    jabatan: "Staf Kaur Perencanaan",
    level: 4,
    parentId: "kaur-perencanaan",
  },

  // --- Pelaksana Kewilayahan (Kepala Dusun) ---
  {
    id: "dusun-daleman",
    nama: "Asrokah",
    jabatan: "Kepala Dusun Daleman",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-kayon",
    nama: "Eric Aditya U",
    jabatan: "Kepala Dusun Kayon",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-karangjati-malang",
    nama: "Ghufron Budi",
    jabatan: "Kepala Dusun Karang Jati / Karang Malang",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-tlogo",
    nama: "Nastain, ST",
    jabatan: "Kepala Dusun Tlogo",
    level: 5,
    parentId: "kepala-desa",
  },
  {
    id: "dusun-pucanggading",
    nama: "M. Munif, SE",
    jabatan: "Kepala Dusun Pucanggading",
    level: 5,
    parentId: "kepala-desa",
  },
];

// Data Monografi & Informasi Profil Desa Batursari
export const profilBatursariData = {
  identitas: {
    namaDesa: "Batursari",
    tahunPembentukan: "1918",
    kodeWilayah: "33.21.10.008",
    kodePos: "59567",
    kecamatan: "Mranggen",
    kabupaten: "Demak",
    provinsi: "Jawa Tengah",
  },
  ringkasan: {
    luas: "6,57 km²",
    jumlahDusun: 5,
    jumlahRw: 40,
    jumlahRt: 332,
    totalRumahIbadah: 98,
    layananKesehatan: 42,
  },
  informasiDusun: {
    total: 5,
    catatan: "Terdiri dari 5 wilayah kedusunan (40 RW & 332 RT). Dusun Karang Jati dan Karang Malang dipimpin oleh 1 Kepala Dusun meskipun wilayahnya terpisah secara geografis.",
  },
  batasWilayah: {
    utara: "Desa Bandungrejo",
    selatan: "Desa Kebonbatur",
    barat: "Desa Plamongan Sari",
    timur: "Desa Mranggen",
  },
  saranaIbadah: {
    masjid: 23,
    musholla: 72,
    gereja: 3,
  },
  saranaKesehatan: {
    puskesdes: 2,
    ukbmPosyandu: 40,
  },
  potensiLokal: [
    {
      nama: "Situs Cagar Budaya Watu Bale",
      kategori: "Cagar Budaya Resmi",
      deskripsi: "Situs sejarah resmi Desa Batursari yang telah ditetapkan sebagai cagar budaya oleh Pemerintah Provinsi Jawa Tengah.",
      ikon: "fas fa-landmark",
    },
    {
      nama: "Situs Watu Nganten",
      kategori: "Potensi Wisata Sejarah",
      deskripsi: "Situs sejarah lokal yang memiliki nilai historis dan berpotensi dikembangkan sebagai destinasi wisata edukasi.",
      ikon: "fas fa-monument",
    },
    {
      nama: "Kawasan TVRI Pucang Gading",
      kategori: "Potensi Area Terbuka",
      deskripsi: "Kawasan di sekitar TVRI Jawa Tengah (Pucang Gading) yang berpotensi menjadi ruang terbuka hijau dan wisata lokal.",
      ikon: "fas fa-mountain-sun",
    },
  ],
  layananAduan: {
    balaiDesa: "Balai Desa Batursari (Senin - Jumat)",
    polresHotline: "0877647932256",
    polresLabel: "0877-6479-32256 (Call Center 1x24 Jam Kapolres)",
    laporGubUrl: "https://laporgub.jatengprov.go.id/",
  }
};