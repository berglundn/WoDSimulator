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
          {stats.abilities.Talents.enabledStats.map((stat) => {
            return (
              <>
                <b>{stat.name}:</b> {makePips(stat.level)}
              </>
            );
          })}
        </div>
        <div className="flex-column">
          <h2>Skills</h2>
          {stats.abilities.Skills.enabledStats.map((stat) => {
            return (
              <>
                <b>{stat.name}:</b> {makePips(stat.level)}
              </>
            );
          })}
        </div>
        <div className="flex-column">
          <h2>Knowledges</h2>
          {stats.abilities.Knowledges.enabledStats.map((stat) => {
            return (
              <>
                <b>{stat.name}:</b> {makePips(stat.level)}
              </>
            );
          })}
        </div>
      </div>
      <h1>Spheres</h1>
      <div className="grid">
        {stats.spheres.enabledSpheres.map((sphere) => {
          return (
            <div>
              <b>{sphere.name}:</b> {makePips(sphere.level)}
            </div>
          );
        })}
      </div>

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
