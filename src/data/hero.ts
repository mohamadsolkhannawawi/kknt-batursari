export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const hero: HeroContent = {
  headline: "Wujudkan Desa Batursari Mandiri Energi Melalui Biogas",
  subheadline:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus lectus, sodales in quam nec, dapibus sodales est. Integer varius finibus ipsum at consequat. Ut eget mi egestas, sodales odio sit amet, vestibulum lorem. Mauris feugiat nisi at eros viverra, id semper sapien blandit.",
  ctaPrimary: { label: "Mulai Eksplorasi", href: "#potensi" },
  ctaSecondary: { label: "Pelajari Lebih Lanjut >", href: "#tentang" },
};
