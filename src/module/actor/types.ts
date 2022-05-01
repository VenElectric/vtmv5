const gameString = "VMT."

function createString(value: string): string{
  return `${gameString}${value}`
}

export enum LocalizationStrings {
  NAME = "NAME",
  TRUE_AGE = "VTM.true_age",
  Gender = "VTM.gender",
  Ambition = "VTM.ambition",
  Desire = "VTM.desire",
  Concept = "VTM.concept",
  Chronicle = "VTM.chronicle",
  Total_Experience = "VTM.total_experience",
  Spent_Experience = "VTM.spent_experience",
  dob = "VTM.date_of_birth",
  Distinguishing_Features = "VTM.distinguishing_features",
  Notes = "VTM.notes",
  Health = "VTM.health",
  Willpower = "VTM.willpower",
  Superficial_Damage = "VTM.superficial",
  Aggravated_Damage = "VTM.aggravated",
  Sire = "VTM.sire",
  Generation = "VMT.generation",
  Clan = "VTM.clan",
  Predator = "VTM.predator",
  Traits = "VTM.traits",
  Strength = "VTM.strength",
  Charisma = "VTM.charisma",
  Intelligence = "VTM.intelligence",
  Dexterity = "VTM.dexterity",
  Manipulation = "VTM.manipulation",
  Wits = "VTM.wits",
  Stamina = "VTM.stamina",
  Composure = "VTM.composure",
  Resolve = "VTM.resolve",
  Demeanor = "VTM.demeanor",
  Age = "Age",
  Residence = "Residence"

}

export interface BaseInterface {
  true_age : number;
  player: string;
  gender: string;
  ambition: string;
  desire: string;
  concept: string;
  chronicle: string;
  total_experience: number;
  spent_experience: number;
  residence: string;
  demeanor: string;
  date_of_birth: string;
  distinguishing_features: string;
  notes: string;
  health: {
    value: number;
    superficial: number;
    aggravated: number;
  };
  willpower: {
    value: number;
    superficial: number; 
    aggravated: number;
  }
}

export interface KindredBase extends BaseInterface {
        predator: PredatorTypes;
        sire: string;
        clan: ClanTypes;
        generation: string;
        humanity: number;
        hunger: number;
        apparent_age: number;
        date_of_death: string;
        coterie_type: number;
        coterie_name: string;
        compulsions: string[];
        appearance: string;
        blood_potency: {
          level: number;
          blood_surge: number;
          mend_amount: string;
          power_bonus: string;
          feeding_penalty: string;
          bane_severity: string;
          rouse_re_roll: string; 
        };
        predator_roll: {
          trait: string;
          skill: string;
        };
        blood_bond: {
          value: number;
          bonded_to: string;
        };
        boons: string[]
}

export enum PredatorTypes {
  Alleyat = "Alleycat",
  Bagger = "Bagger",
  Blood_Leech = "Blood Leech",
  Cleaver = "Cleaver",
  Consensualist = "Consensualist",
  Farmer = "Farmer",
  Osiris = "Osiris",
  Sandman = "Sandman",
  Scene_Quene = "Scene Queen",
  Siren = "Siren",
  Extortionist = "Extortionist",
  Grave_Robber = "Graverobber"
}

export enum ClanTypes {
  Tremere = "Tremere", 
  Brujah = "Brujah",
  Gangrel = "Gangrel",
  Malkavian = "Malkavian",
  Nosferatu = "Nosferatu",
  Toreador = "Toreador",
  Ventrue = "Ventrue",
  Caitiff = "Caitiff",
  Thin_Blood = "Thin-Blooded",
  Tzimisce = "Tzimisce",
  Ministry = "The Ministry",
  Lasombra = "Lasombra",
  Hecata = "Hecata",
  Salubri = "Salubri",
  Ravnos = "Ravnos",
  Banu_Haqim = "Banu Haqim",

}

// todo
export enum CoterieTypes {
  test = "test"
}

// todo
export enum CompulsionTypes {
  compulsion = "compulsion"
}

// todo
export enum TraitTypes {
  Strength = "Strength"
}

export enum SkillTypes {
  Manipulation = "Manipulation"
}
