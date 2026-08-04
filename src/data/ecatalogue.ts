export interface EcatalogueData {
  judul: string;
  subjudul: string;
  websiteUrl: string;
  deskripsi: string[];
  gambar: string;
  caption: string;
}

export const ecatalogueData: EcatalogueData = {
  judul: "Pengembangan E-Catalogue Online UMKM Roti Bakar 86",
  subjudul: "Platform digital interaktif untuk memperluas jangkauan promosi, memperkuat branding produk, serta meningkatkan daya saing UMKM Roti Bakar 86 di Desa Batursari.",
  websiteUrl: "https://roti-bakar-86.vercel.app/",
  deskripsi: [
    "Sektor Usaha Mikro, Kecil, dan Menengah seperti UMKM Roti Bakar 86 di Desa Batursari memiliki potensi produk yang bernilai ekonomi tinggi. Namun, pelaku usaha masih menghadapi kendala keterbatasan jangkauan pasar dan belum memiliki media promosi digital yang terstruktur.",
    "Untuk menjawab permasalahan tersebut, dilakukan pengintegrasian teknologi informasi melalui perancangan platform E-Catalogue berbasis website. Platform ini menyajikan informasi varian menu secara sistematis, harga, serta integrasi tombol kontak langsung (direct link WhatsApp) ke pemesanan guna mendukung keberlanjutan usaha."
  ],
  gambar: "/images/ecatalogue-umkm.jpeg", // Path file gambar di public/images/
  caption: "Tampilan Platform E-Catalogue Online Berbasis Website UMKM Roti Bakar 86."
};