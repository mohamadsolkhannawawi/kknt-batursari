export interface GambarKopi {
  src: string;
  alt: string;
  caption: string;
}

export interface CatalogKopiData {
  kategori: string;
  judul: string;
  subjudul: string;
  deskripsi: string[];
  galeriGambar: GambarKopi[];
  linkWebsite: string;
  linkReportase: string;
}

export const catalogKopiData: CatalogKopiData = {
  kategori: "Digitalisasi UMKM",
  judul: "Pengembangan E-Catalogue Online UMKM Al Haris Natural Coffee",
  subjudul: "Platform digital interaktif untuk memperluas jangkauan promosi, memperkuat branding produk, serta meningkatkan daya saing UMKM Al Haris Natural Coffee di Desa Batursari.",
  websiteUrl: "https://alharis-natural-coffee.vercel.app/",
  deskripsi: [
    "Sektor Usaha Mikro, Kecil, dan Menengah (UMKM) seperti Al Haris Natural Coffee di Desa Batursari memiliki potensi produk kopi lokal berkualitas tinggi yang bernilai ekonomi besar. Namun, pelaku usaha masih menghadapi kendala dalam hal keterbatasan jangkauan pemasaran konvensional dan belum memiliki sarana promosi digital yang terstruktur secara optimal.",
    "Untuk menjawab permasalahan tersebut, dilakukan pendampingan digitalisasi usaha melalui perancangan platform e-catalogue berbasis website yang interaktif. Platform ini menyajikan informasi katalog produk secara sistematis mulai dari varian biji kopi (Arabika, Robusta, Excelsa, dan Liberica), informasi detail tingkat ketinggian kebun (single origin 600–1545 mdpl), panduan cara seduh, hingga atribut legalitas produk guna meningkatkan kepercayaan konsumen secara luas.",
    "Melalui implementasi teknologi ini, diharapkan UMKM mampu melakukan transisi menuju era digital, memperluas pangsa pasar lintas daerah, serta mendukung pencapaian target pembangunan berkelanjutan (SDGs) pada sektor pertumbuhan ekonomi dan inovasi."
  ],
  galeriGambar: [
    {
      src: "/images/ardan-katalog.jpeg", 
      alt: "Tampilan Website E-Catalogue Al Haris Natural Coffee",
      caption: "Tampilan Platform E-Catalogue Online Berbasis Website UMKM Al Haris Natural Coffee."
    }
  ],
  linkReportase: "https://www.jateng.net/implementasi-sdgs-8-9-dan-16-melalui-pendampingan-legalitas-usaha-dan-digitalisasi-umkm-al-haris-natural-coffee-oleh-mahasiswa-kkn-t-141-universitas-diponegoro/"
};