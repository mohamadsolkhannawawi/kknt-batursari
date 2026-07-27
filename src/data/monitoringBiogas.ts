export interface PenerimaManfaat {
  nama: string;
  alamat: string;
  status: string;
  catatanPemanfaatan: string;
}

export interface DigesterMonitoring {
  lokasi: string;
  petugas: string;
  periodeMonitoring: string;
  statusSistem: string;
}

export const digesterStatus: DigesterMonitoring = {
  lokasi: "Kandang Desa Batursari",
  petugas: "Tim KKN-T & Pengelola Kandang",
  periodeMonitoring: "24 Juli – 10 Agustus 2026",
  statusSistem: "Pengisian & Pemantauan Rutin",
};

export const penerimaManfaatList: PenerimaManfaat[] = [
  {
    nama: "Ibu Watik",
    alamat: "Desa Batursari",
    status: "Pendampingan Rutin",
    catatanPemanfaatan: "Pemanfaatan kompor biogas harian untuk memasak",
  },
  {
    nama: "Ibu Juwariyah",
    alamat: "Desa Batursari",
    status: "Pendampingan Rutin",
    catatanPemanfaatan: "Pemantauan kestabilan nyala api & suplai gas",
  },
  {
    nama: "Bapak Faidul Hakim",
    alamat: "Desa Batursari",
    status: "Pendampingan Rutin",
    catatanPemanfaatan: "Pemeriksaan fungsi kompor & saluran gas",
  },
  {
    nama: "Siti Anisah",
    alamat: "Desa Batursari",
    status: "Pendampingan Rutin",
    catatanPemanfaatan: "Evaluasi rutin efisiensi pemanfaatan biogas",
  },
];

export const monitoringSummary = {
  title: "Pendampingan & Monitoring Biogas",
  deskripsi:
    "Kegiatan pemantauan berkala pengisian digester di lokasi kandang serta pendampingan pemanfaatan kompor biogas pada 4 Rumah Tangga penerima manfaat di Desa Batursari.",
};