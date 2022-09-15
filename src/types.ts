export interface Magnitude {
  value: number;
  unit: string;
}
export interface Ingredient {
  name: string;
  amount: Magnitude;
  add?: string;
  attribute?: string;
}

export interface Beer {
  error: string;
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Magnitude;
  boil_volume: Magnitude;
  method: {
    mash_temp: [{ temp: Magnitude; duration: number }];
    fermentation: { temp: Magnitude };
    twist: null;
  };
  ingredients: {
    malt: Ingredient[];
    hops: Ingredient[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface SearchBeerParams {
  abv_lt?: string;
  abv_gt?: string;
  ebc_lt?: string;
  ebc_gt?: string;
  ibu_lt?: string;
  ibu_gt?: string;
  beer_name?: string;
}

export interface SearchOrderParams {
  order: string;
  orderBy: string;
}

export interface APIError {
  error: string;
  message: string;
  statusCode: number;
}
