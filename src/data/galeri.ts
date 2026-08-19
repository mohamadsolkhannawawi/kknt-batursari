export interface FotoGaleri {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  linkNews?: {
    url: string;
    label: string;
  };
}

export const galeriList: FotoGaleri[] = [
  {
    id: "galeri-1",
    src: "/images/Penerjunan.jpg",
    alt: "Penerjunan Tim KKN-T 141 Kelompok 2 Undip di Balai Desa Batursari",
    caption:
      "Kegiatan penerjunan resmi Tim KKN-Tematik ESDM KKNT-141 Kelompok 2 Universitas Diponegoro bersama perangkat desa di Balai Desa Batursari.",
  },
  {
    id: "galeri-2",
    src: "/images/SowanRT.jpg",
    alt: "Koordinasi dan sowan ke jajaran RT dan RW Desa Batursari",
    caption:
      "Momen koordinasi awal dan sowan kewilayahan bersama ketua RT dan RW setempat guna memetakan kondisi serta kebutuhan energi masyarakat desa.",
  },
  {
    id: "galeri-3",
    src: "/images/Senam.jpg",
    alt: "Kegiatan senam sehat bersama ibu-ibu RT di Desa Batursari",
    caption:
      "Meningkatkan keakraban dan kebersamaan melalui kegiatan senam sehat bersama ibu-ibu RT setempat guna menjaga kebugaran jasmani warga Desa Batursari.",
  },
    {
    id: "galeri-4",
    src: "/images/PKK.jpg",
    alt: "Keikutsertaan Tim KKN-T Undip dalam Pertemuan Rutin Ibu-Ibu PKK Desa Batursari",
    caption:
      "Partisipasi aktif dan silaturahmi mahasiswa KKN-T 141 Undip Kelompok 2 dalam kegiatan pertemuan rutin ibu-ibu PKK Kelurahan Batursari.",
  },
  {
    id: "galeri-5",
    src: "/images/piketbaldes.jpeg",
    alt: "Kegiatan piket harian di Balai Desa Batursari",
    caption:
      "Kegiatan piket harian di Balai Desa Batursari untuk mendukung pelayanan administrasi dan operasional kantor desa.",
  },
  {
    id: "galeri-6",
    src: "/images/POC.jpg",
    alt: "Proses pembuatan dan produksi Pupuk Organik Cair (POC) Desa Batursari",
    caption:
      "Proses pengolahan dan pencampuran bahan baku dalam pembuatan Pupuk Organik Cair (POC) secara mandiri guna mengoptimalkan potensi limbah organik di Desa Batursari.",
  },
  {
    id: "galeri-7",
    src: "/images/SosialisasiSMP3.jpg",
    alt: "Sosialisasi Transisi Hijau di SMP Negeri 3 Mranggen",
    caption:
      "Edukasi dan sosialisasi transisi hijau oleh Tim KKNT-141 Kelompok 2 Undip guna mencetak generasi muda yang peduli terhadap kelestarian lingkungan di SMP Negeri 3 Mranggen.",
    linkNews: {
      url: "https://jatengvox.com/cetak-generasi-peduli-lingkungan-kknt-141-undip-hadirkan-sosialisasi-transisi-hijau-di-smp-negeri-3-mranggen/",
      label: "JatengVox",
    },
  },
   {
    id: "galeri-8",
    src: "/images/ArisanBapak.jpg", 
    alt: "Menghadiri Acara Arisan Rutin Warga Bapak-Bapak di Desa Batursari",
    caption:
      "Menjalin keakraban dan diskusi santai bersama warga bapak-bapak setempat dalam pertemuan arisan rutin RT/RW Desa Batursari.",
  },
  {
    id: "galeri-9",
    src: "/images/ArisanIbu.jpg",
    alt: "Pertemuan Arisan Rutin Ibu-Ibu dan Pembahasan Perencanaan Lomba 17 Agustus",
    caption:
      "Keikutsertaan Tim KKN-T 141 Kelompok 2 Undip dalam pertemuan arisan rutin warga sekaligus menyimak pembahasan persiapan rangkaian kegiatan perlombaan HUT RI 17 Agustus bersama ibu-ibu Desa Batursari.",
  },
  {
    id: "galeri-10",
    src: "/images/UMKMRoti.jpg",
    alt: "Kunjungan dan Membantu Pengemasan Produk UMKM Roti Desa Batursari",
    caption:
      "Kunjungan silaturahmi sekaligus ikut membantu pengemasan roti di salah satu UMKM lokal Desa Batursari yang memproduksi bahan baku roti bakar.",
  },
  {
    id: "galeri-11",
    src: "/images/HaulMakam.jpg", 
    alt: "Partisipasi Tim KKN-T 141 Undip dalam Acara Haul Desa Batursari",
    caption:
      "Keikutsertaan dan partisipasi aktif Tim KKN-T 141 Undip Kelompok 2 dalam kegiatan tradisi Haul serta silaturahmi bersama warga masyarakat di areal Pemakaman Desa Batursari.",
  },
  {
    id: "galeri-12",
    src: "/images/NgajarMasjidDaleman.JPG", 
    alt: "Bimbingan Belajar Anak TK dan SD di Masjid Daleman Desa Batursari",
    caption:
      "Kegiatan bimbingan belajar dasar serta pendampingan edukatif bagi anak-anak usia TK dan SD yang dilaksanakan pada hari Jumat di Masjid Itikaf Darul Mutaqin, Desa Batursari.",
  },
  {
    id: "galeri-13",
    src: "/images/LOMBA.jpg", 
    alt: "Diskusi Persiapan Perlombaan 17 Agustus bersama Bapak Haris dan Karang Taruna",
    caption:
      "Sesi diskusi santai dan koordinasi perencanaan perayaan HUT RI 17 Agustus bersama Bapak Haris serta pemuda Karang Taruna Desa Batursari.",
  },
  {
    id: "galeri-14",
    src: "/images/posyandu.jpeg",
    alt: "Partisipasi Tim KKN-T Undip dalam Kegiatan Posyandu Dusun Daleman",
    caption:
      "Momen kebersamaan mahasiswa KKN-T 141 Kelompok 2 Undip saat berpartisipasi membantu kegiatan Posyandu di Dusun Daleman, Desa Batursari.",
  },
  {
    id: "galeri-15",
    src: "/images/MengajarSMP3.JPG", 
    alt: "Pendampingan Pembelajaran Mata Pelajaran di SMP Negeri 3 Mranggen",
    caption:
      "Pelaksanaan kegiatan mengajar dan pendampingan mata pelajaran oleh Mahasiswa KKN-T 141 Undip Kelompok 2 sesuai disiplin ilmu dan rumpun program studi masing-masing kepada siswa-siswi SMP Negeri 3 Mranggen.",
  },
  {
    id: "galeri-16",
    src: "/images/fatayat.jpg",
    alt: "Partisipasi Tim KKN-T  141 kelompok 2 Undip dalam Pengajian Rutin Triwulan Muslimat-Fatayat Nahdlatul Ulama",
    caption:
      "Potret kebersamaan mahasiswa KKN-T 141 Kelompok 2 Undip saat membantu dan ikut berpartisipasi dalam persiapan kegiatan pengajian rutin triwulan Muslimat-Fatayat Nahdlatul Ulama di Desa Batursari.",
  },
  {
    id: "galeri-17",
    src: "/images/AGUSTUSAN.jpeg",
    alt: "Partisipasi Tim KKN-T  141 kelompok 2 Undip Membantu Perayaan Lomba 17 Agustus",
    caption:
      "Keseruan mahasiswa KKN-T 141 Undip Kelompok 2 saat turun langsung ikut serta membantu memandu dan meriahkan perlombaan dalam rangka perayaan HUT RI 17 Agustus bersama anak-anak dan warga Desa.",
  },
  {
    id: "galeri-18",
    src: "/images/piketbiogas.jpg",
    alt: "Monitoring dan peninjauan titik biogas aktif di peternakan warga Desa Batursari",
    caption: "Kegiatan pemantauan, monitoring titik biogas aktif, serta peninjauan fasilitas peternakan warga sebagai bagian dari optimalisasi energi terbarukan di Desa Batursari.",
  },
  {
    id: "galeri-19",
    src: "/images/kerjabakti.JPG",
    alt: "Kegiatan kerja bakti dan gotong royong bersama warga Desa Batursari",
    caption: "Partisipasi aktif mahasiswa KKN-T 141 Kelompok 2 Undip dalam kegiatan kerja bakti bersama warga untuk membersihkan lingkungan sekitar.",
  },
  {
    id: "galeri-20",
    src: "/images/bersihsma.jpeg",
    alt: "Kegiatan bersih-bersih dan persiapan Workshop Internasional di SMP Negeri 3 Mranggen",
    caption:
      "Aksi gotong royong mahasiswa KKN-T 141 Universitas Diponegoro bersama pihak sekolah dalam membersihkan dan merapikan ruangan sebagai persiapan menyambut acara Workshop Pemberdayaan Masyarakat melalui Biorefinery Berbasis Biogas pada tanggal 10 Agustus.",
  },
];