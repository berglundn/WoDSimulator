import React, { useState } from "react";
import RandomGenerator from "../../DataProviders/RandomGenerator";
import { CharacterStats } from "../../DataProviders/StatOutline";

/**
 * The page content for a Mage: the Ascension character, either randomly generated or scaled to Arete (as a "level") as chosen by a user
 * @returns The Mage: the Ascension NPC Generator page
 */
const NpcGenerator: React.FC<{}> = () => {
  const affliliation = RandomGenerator.getRandomAffiliation();
  const sect = RandomGenerator.getRandomSect(affliliation);
  const [stats, setStats] = useState(new CharacterStats());

  /**
   * The method of translating raw stat numbers to the stylistic choices of the RPG. Assumes a maximum of 5 value. TODO: Update to not assume maximum of 5
   * @param elementValue Value of character stat, background, or other element being displayed
   * @returns A string of ASCII circles and filled circles, with the filled circles signifying the input elementValue
   */
  function makePips(elementValue: number) {
    var returnHtml = "";
    for (var i = 0; i < elementValue; i++) {
      returnHtml += "\u{25C9}";
    }
    for (var j = 5 - elementValue; j > 0; j--) {
      returnHtml += "\u{25CE}";
    }
    return returnHtml;
  }

  return (
    <div>
      <div className="flex-row">
        <div className="flex-column">
          <b>Name: </b> {RandomGenerator.getRandomName()}
          <b>Player: </b> Me
          <b>Chronicle: </b> That one
        </div>
        <div className="flex-column">
          <b>Nature: </b> {RandomGenerator.getRandomArchetype()}
          <b>Demeanor: </b> {RandomGenerator.getRandomArchetype()}
          <b>Essence: </b> {RandomGenerator.getRandomEssence()}
        </div>
        <div className="flex-column">
          <b>Affiliation: </b> {affliliation}
          <b>Sect: </b> {sect}
          <b>Concept: </b> Random guy
        </div>
      </div>
      <h1>Attributes</h1>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Physical</h2>
          <b>Strength: </b> {makePips(stats.attributes.Physical.Strength)}
          <b>Dexterity: </b> {makePips(stats.attributes.Physical.Dexterity)}
          <b>Stamina: </b> {makePips(stats.attributes.Physical.Stamina)}
        </div>
        <div className="flex-column">
          <h2>Social</h2>
          <b>Charisma: </b> {makePips(stats.attributes.Social.Charisma)}
          <b>Manipulation: </b> {makePips(stats.attributes.Social.Manipulation)}
          <b>Appearance: </b> {makePips(stats.attributes.Social.Appearance)}
        </div>
        <div className="flex-column">
          <h2>Mental</h2>
          <b>Perception: </b> {makePips(stats.attributes.Mental.Perception)}
          <b>Intelligence: </b> {makePips(stats.attributes.Mental.Intelligence)}
          <b>Wits: </b> {makePips(stats.attributes.Mental.Wits)}
        </div>
      </div>
      <h1>Abilities</h1>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Talents</h2>
          <b>Alertness: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Alertness",
            )!.level,
          )}
          <b>Art: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find((x) => x.name === "Art")!
              .level,
          )}
          <b>Athletics: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Athletics",
            )!.level,
          )}
          <b>Awareness: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Awareness",
            )!.level,
          )}
          <b>Brawl: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Brawl",
            )!.level,
          )}
          <b>Empathy: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Empathy",
            )!.level,
          )}
          <b>Expression: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Expression",
            )!.level,
          )}
          <b>Intimidation: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Intimidation",
            )!.level,
          )}
          <b>Leadership: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Leadership",
            )!.level,
          )}
          <b>Streetwise: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Streetwise",
            )!.level,
          )}
          <b>Subterfuge: </b>
          {makePips(
            stats.abilities.Talents.enabledStats.find(
              (x) => x.name === "Subterfuge",
            )!.level,
          )}
        </div>
        <div className="flex-column">
          <h2>Skills</h2>
          <b>Crafts: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Drive: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Ettiquite: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Firearms: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Martial Arts: </b>
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Meditation: </b>
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Melee: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Research: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Stealth: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Survival: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Technology: </b>
          {makePips(RandomGenerator.getRandomAbilityWorth())}
        </div>
        <div className="flex-column">
          <h2>Knowledges</h2>
          <b>Academics: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Computer: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Cosmology: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Enigmas: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Esoterica: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Investigation: </b>
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Law: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Medicine: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Occult: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Politics: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Science: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
        </div>
      </div>
      <h1>Spheres</h1>
      <h1>Advantages</h1>
      <h1>Merits & Flaws</h1>
      <h1>Other Traits</h1>
      <h1>Magic</h1>
      <h1>Combat</h1>
      <h1>Extended Background</h1>
      <h1>Posessions</h1>
      <h1>Chantry</h1>
      <h1>History</h1>
      <h1>Description</h1>
      <h1>Visuals</h1>
    </div>
  );
};

export default NpcGenerator;
