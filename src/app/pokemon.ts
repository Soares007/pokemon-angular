export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      }
    }
  }
  base_experience: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
    slot: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}
