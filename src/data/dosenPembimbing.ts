export interface DosenPembimbing {
  id: string;
  nama: string;
  gelar: string;
  nidn: string;
  prodi: string;
  fakultas: string;
  peran: string;
  foto?: string;
}

export const dosenPembimbingList: DosenPembimbing[] = [
  {
    id: "dpl-1",
    nama: "Sunarno",
    gelar: "Dr., S.Si., M.Si.",
    nidn: "197309221998021001/0022097303", 
    prodi: "Biologi",
    fakultas: "Fakultas Sains dan Matematika",
    peran: "Dosen Pembimbing Lapangan",
    foto: "/images/Sunarno.jpg",
  },
  {
    id: "dpl-2",
    nama: "Muhammad Luqman Hakim",
    gelar: "S.Si., M.Si.",
    nidn: "196701231991032001", 
    prodi: "Biologi",
    fakultas: "Fakultas Sains dan Matematika",
    peran: "Dosen Pembimbing Lapangan",
    foto: "/images/Luqman.png",
  },
];
