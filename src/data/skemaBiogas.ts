export interface LangkahBiogas {
  id: string;
  title: string;
  description: string;
  iconSvgPath: string;
}

export const skemaBiogasSteps: LangkahBiogas[] = [
  {
    id: "limbah-ternak",
    title: "Limbah Ternak",
    description:
      "Kotoran sapi, kambing, atau unggas dikumpulkan dari kandang warga.",
    iconSvgPath:
      "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",
  },
  {
    id: "digester",
    title: "Digester Biogas",
    description:
      "Limbah difermentasi tanpa oksigen di dalam tangki digester tertutup.",
    iconSvgPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12 6v6l4 2",
  },
  {
    id: "gas-metana",
    title: "Gas Metana",
    description:
      "Proses fermentasi menghasilkan gas metana yang bisa langsung dialirkan.",
    iconSvgPath: "M12 2c-2 4-6 6-6 11a6 6 0 0 0 12 0c0-5-4-7-6-11Z",
  },
  {
    id: "energi-rumah-tangga",
    title: "Energi Rumah Tangga",
    description:
      "Gas disalurkan ke kompor rumah warga sebagai pengganti LPG/kayu bakar.",
    iconSvgPath: "M3 12h18M12 3v18",
  },
];

// Placeholder visual skema 2D/3D dari tim Arsitektur (Multi 2, Output 2.3)
export const skemaBiogasVisual = {
  src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  alt: "Skema instalasi biogas sederhana untuk pedesaan",
};
