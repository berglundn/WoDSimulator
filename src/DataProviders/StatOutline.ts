import { mageKnowledges, mageSkills, mageTalents } from "./Mage/Constants";
import RandomGenerator from "./RandomGenerator";

export interface Statistic {
  name: string;
  level: number;
  specialty: string | null;
} // TODO implement this

export interface AbilityStat extends Statistic {
  enabled: boolean;
}

export interface AbilityCategory {
  name: string;
  enabledStats: AbilityStat[];
  disabledStats: AbilityStat[];
}

const STARTING_ATTRIBUTE_HIGH = 7;
const STARTING_ATTRIBUTE_MEDIUM = 5;
const STARTING_ATTRIBUTE_LOW = 3;
const STARTING_ABILITY_HIGH = 13;
const STARTING_ABILITY_MEDIUM = 9;
const STARTING_ABILITY_LOW = 5;

export class CharacterStats {
  attributes = {
    Physical: { Strength: 0, Dexterity: 0, Stamina: 0 },
    Social: { Charisma: 0, Manipulation: 0, Appearance: 0 },
    Mental: { Perception: 0, Intelligence: 0, Wits: 0 },
  };
  abilities = {
    Talents: mageTalents,
    Skills: mageSkills,
    Knowledges: mageKnowledges,
  };

  constructor() {
    this.abilities = this.generateAbilities(
      mageTalents,
      mageSkills,
      mageKnowledges,
    );
    this.attributes = this.generateAttributes(1);
  }
  generateAttributes(level: number) {
    const attributesArray = RandomGenerator.shuffle([
      "Physical",
      "Social",
      "Mental",
    ]);
    let physicals = [0, 0, 0];
    let socials = [0, 0, 0];
    let mentals = [0, 0, 0];
    if (attributesArray[0] === "Physical" && attributesArray[1] === "Social") {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
    } else if (
      attributesArray[0] === "Physical" &&
      attributesArray[1] === "Mental"
    ) {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
    } else if (
      attributesArray[0] === "Social" &&
      attributesArray[1] === "Physical"
    ) {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
    } else if (
      attributesArray[0] === "Social" &&
      attributesArray[1] === "Mental"
    ) {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
    } else if (
      attributesArray[0] === "Mental" &&
      attributesArray[1] === "Physical"
    ) {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
    } else if (
      attributesArray[0] === "Mental" &&
      attributesArray[1] === "Social"
    ) {
      physicals = makeAttributeValues(STARTING_ATTRIBUTE_LOW);
      socials = makeAttributeValues(STARTING_ATTRIBUTE_MEDIUM);
      mentals = makeAttributeValues(STARTING_ATTRIBUTE_HIGH);
    }
    return {
      Physical: {
        Strength: physicals[0],
        Dexterity: physicals[1],
        Stamina: physicals[2],
      },
      Social: {
        Charisma: socials[0],
        Manipulation: socials[1],
        Appearance: socials[2],
      },
      Mental: {
        Perception: mentals[0],
        Intelligence: mentals[1],
        Wits: mentals[2],
      },
    };
  }
  generateAbilities(
    talents: AbilityCategory,
    skills: AbilityCategory,
    knowledges: AbilityCategory,
  ) {
    const abilitesOrder = RandomGenerator.shuffle([
      "Talents",
      "Skills",
      "Knowledges",
    ]);
    if (abilitesOrder[0] === "Talents" && abilitesOrder[1] === "Skills") {
      makeAbilityValues(STARTING_ABILITY_HIGH, talents);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, skills);
      makeAbilityValues(STARTING_ABILITY_LOW, knowledges);
    } else if (
      abilitesOrder[0] === "Talents" &&
      abilitesOrder[1] === "Knowledges"
    ) {
      makeAbilityValues(STARTING_ABILITY_HIGH, talents);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, knowledges);
      makeAbilityValues(STARTING_ABILITY_LOW, skills);
    } else if (
      abilitesOrder[0] === "Skills" &&
      abilitesOrder[1] === "Talents"
    ) {
      makeAbilityValues(STARTING_ABILITY_HIGH, skills);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, talents);
      makeAbilityValues(STARTING_ABILITY_LOW, knowledges);
    } else if (
      abilitesOrder[0] === "Skills" &&
      abilitesOrder[1] === "Knowledges"
    ) {
      makeAbilityValues(STARTING_ABILITY_HIGH, skills);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, knowledges);
      makeAbilityValues(STARTING_ABILITY_LOW, talents);
    } else if (
      abilitesOrder[0] === "Knowledges" &&
      abilitesOrder[1] === "Talents"
    ) {
      makeAbilityValues(STARTING_ABILITY_HIGH, knowledges);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, talents);
      makeAbilityValues(STARTING_ABILITY_LOW, skills);
    } else if (
      abilitesOrder[0] === "Knowledges" &&
      abilitesOrder[1] === "Skills"
    ) {
      makeAbilityValues(STARTING_ABILITY_HIGH, knowledges);
      makeAbilityValues(STARTING_ABILITY_MEDIUM, skills);
      makeAbilityValues(STARTING_ABILITY_LOW, talents);
    }
    return { Talents: talents, Skills: skills, Knowledges: knowledges };
  }
}

function makeAbilityValues(value: number, ability: AbilityCategory) {
  for (let i = 0; i < value; i++) {
    ability.enabledStats[
      RandomGenerator.getRandomInt(ability.enabledStats.length - 1)
    ].level++;
  }
  return ability.enabledStats;
}

function makeAttributeValues(value: number) {
  const threeValues = [1, 1, 1];
  for (let i = 0; i < value; i++) {
    threeValues[RandomGenerator.getRandomInt(3)]++;
  }
  return threeValues;
}
