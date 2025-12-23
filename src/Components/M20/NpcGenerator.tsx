import React from "react";
import RandomGenerator from "../../DataProviders/RandomGenerator";

const NpcGenerator: React.FC<{}> = () => {
  var affliliation = RandomGenerator.getRandomAffiliation();
  var sect = RandomGenerator.getRandomSect(affliliation);

  function makePips(elementValue: number) {
    var returnHtml = "";
    for (var i = 0; i < elementValue; i++) {
      returnHtml += "\u{25C9}";
    }
    for (var i = 5 - elementValue; i > 0; i--) {
      returnHtml += "\u{25CE}";
    }
    return returnHtml;
  }

  function generateStats() {}

  return (
    <div>
      <div className="flex-row">
        <div className="flex-column">
          <b>Name: </b> {RandomGenerator.getRandomName()}
          <b>Player: </b> Mwah
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
          <b>Concept: </b> Rando guy
        </div>
      </div>
      <h1>Attributes</h1>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Physical</h2>
          <b>Strength: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Dexterity: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Stamina: </b> {makePips(RandomGenerator.getRandomAttributeWorth())}
        </div>
        <div className="flex-column">
          <h2>Social</h2>
          <b>Charisma: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Manipulation: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Appearance: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
        </div>
        <div className="flex-column">
          <h2>Mental</h2>
          <b>Perception: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Intelligence: </b>{" "}
          {makePips(RandomGenerator.getRandomAttributeWorth())}
          <b>Wits: </b> {makePips(RandomGenerator.getRandomAttributeWorth())}
        </div>
      </div>
      <h1>Abilities</h1>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Talents</h2>
          <b>Alertness: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Art: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Athletics: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Awareness: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Brawl: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Empathy: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Expression: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Intimidation: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Leadership: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Streetwise: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Subterfuge: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
        </div>
        <div className="flex-column">
          <h2>Skills</h2>
          <b>Crafts: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Drive: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Ettiquite: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Firearms: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Martial Arts: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Meditation: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Melee: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Research: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Stealth: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Survival: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Technology: </b>{" "}
          {makePips(RandomGenerator.getRandomAbilityWorth())}
        </div>
        <div className="flex-column">
          <h2>Knowledges</h2>
          <b>Academics: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Computer: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Cosmology: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Enigmas: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Esoterica: </b> {makePips(RandomGenerator.getRandomAbilityWorth())}
          <b>Investigation: </b>{" "}
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
