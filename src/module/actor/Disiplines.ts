export interface DisicplineInterface {
  name: string;
  dice_pool: string;
  cost: string;
  system: string;
  amalgam?: {
    discipline: DisciplineTypes;
    level: number;
  };
}

export enum DisciplineTypes {
  Oblivion = "Oblivion",
  Celerity = "Celerity",
  Blood_Sorcery = "Blood Sorcery",
  Dominate = "Dominate",
  Presence = "Presence",
  Obfuscate = "Obfuscate",
  Auspex = "Auspex",
  Animalism = "Animalism",
  Protean = "Protean",
  Fortitude = "Fortitude",
  Potence = "Potence",
  Alchemy = "Thin-Blood Alchemy",
}

export const Disicplines = {
  [DisciplineTypes.Oblivion]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Celerity]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Blood_Sorcery]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Dominate]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Auspex]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Protean]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Animalism]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Fortitude]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Obfuscate]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Presence]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Potence]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
  [DisciplineTypes.Alchemy]: {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  },
};

export const OblivionCeremonies = {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  };
  
  export const BloodSorceryRituals = {
    level_one: {},
    level_two: {},
    level_three: {},
    level_four: {},
    level_five: {},
  };
