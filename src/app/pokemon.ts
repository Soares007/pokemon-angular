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
  }