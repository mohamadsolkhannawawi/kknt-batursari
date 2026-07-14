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
    nama: "TODO: Nama Lengkap DPL 1",
    gelar: "TODO: Gelar 1",
    nidn: "TODO: NIDN/NIP DPL 1",
    prodi: "TODO: Program Studi DPL 1",
    fakultas: "TODO: Fakultas DPL 1",
    peran: "Dosen Pembimbing Lapangan",
    foto: "https://images.unsplash.com/photo-1473830394358-91588751b241?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "dpl-2",
    nama: "TODO: Nama Lengkap DPL 2",
    gelar: "TODO: Gelar 2",
    nidn: "TODO: NIDN/NIP DPL 2",
    prodi: "TODO: Program Studi DPL 2",
    fakultas: "TODO: Fakultas DPL 2",
    peran: "Dosen Pembimbing Lapangan",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
  },
];
