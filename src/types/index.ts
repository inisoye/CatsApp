export interface Breed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string | null;
  vetstreet_url?: string | null;
  vcahospitals_url?: string | null;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number | null;
  alt_names?: string | null;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string | null;
  hypoallergenic: number;
  reference_image_id?: string | null;
  image?: Image | null;
  cat_friendly?: number | null;
  bidability?: number | null;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
