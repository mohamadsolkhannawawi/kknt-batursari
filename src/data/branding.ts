export interface BrandingData {
  judul: string;
  subjudul: string;
  instagramUrl: string;
  deskripsi: string[];
  gambar: string;
  caption: string;
}

export const brandingData: BrandingData = {
  judul: "Pengelolaan Media Sosial & Branding UMKM Roti Bakar 86",
  subjudul: "Upaya penguatan identitas visual, perancangan logo baru, dan manajemen konten digital guna memperluas jangkauan promosi usaha lokal Desa Batursari.",
  instagramUrl: "https://www.instagram.com/bakeby86_?igsh=MXNmejlsbTl0azZ1Ng==",
  deskripsi: [
    "Perkembangan teknologi digital menuntut pelaku usaha lokal untuk bertransisi ke media sosial dan platform digital. Namun, UMKM Roti Bakar 86 di Desa Batursari sebelumnya menghadapi kendala belum optimalnya identitas visual dan perencanaan konten promosi.",
    "Melalui program ini, dilakukan pembuatan identitas logo baru yang modern, penyusunan content planner bulanan, eksekusi konten foto dan video produk, serta pendampingan langsung kepada pemilik usaha agar mampu mengelola promosi digital secara mandiri."
  ],
  gambar: "/images/rotibakar86-branding.jpeg", // Path file gambar di public/images/
  caption: "Tampilan Akun Instagram @bakeby86_, Content Planner, dan Identitas Visual UMKM Roti Bakar 86."
};