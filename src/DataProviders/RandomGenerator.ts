import Constants from "./Mage/Constants";
class RandomGenerator {
  static getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  static getArrayItemEvenOdds(array: any[]) {
    return array[this.getRandomInt(array.length - 1)];
  }

  static getRandomName() {
    return "Jared Ledsworth";
  }

  static getRandomArchetype() {
    return this.getArrayItemEvenOdds(Constants.ArchetypesArray);
  }

  static getRandomEssence() {
    return this.getArrayItemEvenOdds(Constants.Essences);
  }

  static getRandomAffiliation() {
    return this.getArrayItemEvenOdds(Constants.Affiliations);
  }

  static getRandomSect(affiliation: string) {
    var sect = "ERROR";
    if (affiliation === "Disparate") {
      sect = this.getArrayItemEvenOdds(Constants.DisparateSects);
    } else if (affiliation === "Marauder") {
      sect = "Marauder";
    } else if (affiliation === "Nephandi") {
      sect = this.getArrayItemEvenOdds(Constants.NephandiSects);
    } else if (affiliation === "Technocracy") {
      sect = this.getArrayItemEvenOdds(Constants.TechnocracySects);
    } else {
      sect = this.getArrayItemEvenOdds(Constants.TechnocracySects);
    }
    return sect;
  }
  static getRandomAttributeWorth() {
    var probability = this.getRandomInt(100);
    var worth;
    if (probability <= 20) {
      worth = 1;
    } else if (probability > 20 && probability <= 40) {
      worth = 2;
    } else if (probability > 40 && probability <= 60) {
      worth = 3;
    } else if (probability > 60 && probability <= 80) {
      worth = 4;
    } else {
      worth = 5;
    }
    return worth;
  }

  static getRandomAbilityWorth() {
    var probability = this.getRandomInt(100);
    var worth;
    if (probability <= 25) {
      worth = 0;
    } else if (probability > 25 && probability <= 45) {
      worth = 1;
    } else if (probability > 45 && probability <= 70) {
      worth = 2;
    } else if (probability > 70 && probability <= 85) {
      worth = 3;
    } else if (probability > 85 && probability <= 95) {
      worth = 4;
    } else {
      worth = 5;
    }
    return worth;
  }

  static randomizeArray(valuesArray: any[]) {
    let oldArray = valuesArray;
    let newArray = [];
    for (let i = valuesArray.length; i > 0; i--) {
      const nextIndex = this.getRandomInt(i - 1);
      newArray.push(oldArray.splice(nextIndex)[0]);
    }
    return newArray;
  }
}

export default RandomGenerator;
