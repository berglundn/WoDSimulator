export default class Traditions {
  static applyTraditionTraitsAbilities(tradition: string, stats: any) {
    switch (tradition) {
      case "Akashayana":
        stats["Abilities"]["Talents"]["Athletics"]++;
        stats["Abilities"]["Skills"]["Martial Arts"]++;
        stats["Abilities"]["Knowledges"]["Enigmas"]++;
        break;
      case "Celestial Chorus":
        stats["Abilities"]["Talents"]["Expression"]++;
        stats["Abilities"]["Skills"]["Crafts"]++;
        stats["Abilities"]["Knowledges"]["Occult"]++;
        break;
      case "Cult of Ecstacy":
        stats["Abilities"]["Talents"]["Streetwise"]++;
        stats["Abilities"]["Skills"]["Meditation"]++;
        stats["Abilities"]["Knowledges"]["Enigmas"]++;
        break;
      case "Dreamspeaker":
        stats["Abilities"]["Talents"]["Awareness"]++;
        stats["Abilities"]["Skills"]["Meditation"]++;
        stats["Abilities"]["Knowledges"]["Medicine"]++;
        break;
      case "Euthanatoi":
        stats["Abilities"]["Talents"]["Empathy"]++;
        stats["Abilities"]["Skills"]["Melee"]++;
        stats["Abilities"]["Knowledges"]["Law"]++;
        break;
      case "Hermic Order":
        stats["Abilities"]["Talents"]["Art"]++;
        stats["Abilities"]["Skills"]["Research"]++;
        stats["Abilities"]["Knowledges"]["Esoterica"]++;
        break;
      case "Society of Ether":
        stats["Abilities"]["Talents"]["Alertness"]++;
        stats["Abilities"]["Skills"]["Technology"]++;
        stats["Abilities"]["Knowledges"]["Academics"]++;
        break;
      case "Verbena":
        stats["Abilities"]["Talents"]["Alertness"]++;
        stats["Abilities"]["Skills"]["Survival"]++;
        stats["Abilities"]["Knowledges"]["Cosmology"]++;
        break;
      case "Virtual Adepts":
        stats["Abilities"]["Talents"]["Subterfuge"]++;
        stats["Abilities"]["Skills"]["Technology"]++;
        stats["Abilities"]["Knowledges"]["Computer"]++;
        break;
      case "Infernalist":
        stats["Abilities"]["Talents"]["Subterfuge"]++;
        stats["Abilities"]["Skills"]["Academics"]++;
        stats["Abilities"]["Knowledges"]["Enigmas"]++;
        break;
      case "Malfean":
        stats["Abilities"]["Talents"]["Intimidation"]++;
        stats["Abilities"]["Skills"]["Crafts"]++;
        stats["Abilities"]["Knowledges"]["Medicine"]++;
        break;
      case "K'llasshaa":
        stats["Abilities"]["Talents"]["Awareness"]++;
        stats["Abilities"]["Skills"]["Melee"]++;
        stats["Abilities"]["Knowledges"]["Cosmology"]++;
        break;
      case "Iteration X":
        stats["Abilities"]["Talents"]["Intimidation"]++;
        stats["Abilities"]["Skills"]["Technology"]++;
        stats["Abilities"]["Knowledges"]["Science"]++;
        break;
      case "New World Order":
        stats["Abilities"]["Talents"]["Alertness"]++;
        stats["Abilities"]["Skills"]["Firearms"]++;
        stats["Abilities"]["Knowledges"]["Investigation"]++;
        break;
      case "Syndicate":
        stats["Abilities"]["Talents"]["Leadership"]++;
        stats["Abilities"]["Skills"]["Ettiquitte"]++;
        stats["Abilities"]["Knowledges"]["Politics"]++;
        break;
      case "Void Engineer":
        stats["Abilities"]["Talents"]["Awareness"]++;
        stats["Abilities"]["Skills"]["Survival"]++;
        stats["Abilities"]["Knowledges"]["Cosmology"]++;
        break;
      case "Orphan":
        // stats["Abilities"]["Talents"][Math.random()*10]++;
        // stats["Abilities"]["Skills"][Math.random()*10]++;
        // stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Hollow Ones":
        stats["Abilities"]["Talents"]["Intimidation"]++;
        stats["Abilities"]["Skills"]["Crafts"]++;
        stats["Abilities"]["Knowledges"]["Occult"]++;
        break;
      case "Ahl-i-Batin":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Taftâni":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Sisters of Hippolyta":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Knights Templar":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Wu-Keng":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Lions of Zion":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Wu Nung":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Thunder Society":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Navalon":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Miranohmen":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Red Thorn Dedicants":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
      case "Its'at":
        stats["Abilities"]["Talents"][""]++;
        stats["Abilities"]["Skills"][""]++;
        stats["Abilities"]["Knowledges"][""]++;
        break;
    }
  }
}
