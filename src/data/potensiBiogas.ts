export interface TitikPotensiBiogas {
  id: string;
  lokasi: string;
  jenisTernak: string;
  estimasiLimbah: string;
  potensiGas: string;
  keteranganLahan: string;
}

export const potensiBiogasList: TitikPotensiBiogas[] = [
  {
    id: "titik-1",
    lokasi: "Dusun Krajan (Contoh)",
    jenisTernak: "Sapi & Kambing",
    estimasiLimbah: "150 kg/hari",
    potensiGas: "±5.5 m³/hari",
    keteranganLahan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "titik-2",
    lokasi: "Dusun Pandean (Contoh)",
    jenisTernak: "Ayam Petelur",
    estimasiLimbah: "80 kg/hari",
    potensiGas: "±3.2 m³/hari",
    keteranganLahan: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "titik-3",
    lokasi: "Dusun Ngablak (Contoh)",
    jenisTernak: "Kambing Etawa",
    estimasiLimbah: "100 kg/hari",
    potensiGas: "±4.0 m³/hari",
    keteranganLahan: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const petaPotensi = {
  src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Peta Potensi Biogas Desa",
};

export const deskripsiPotensi =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.";
