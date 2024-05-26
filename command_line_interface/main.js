import Monster from "./main/classes/Monsters/Monster.js";
import UserCharacter from "./main/classes/Characters/UserCharacter.js";

const warrior = new UserCharacter("Austin", "Imperial", "Lambda").getInfo()
console.log(warrior)

const orc = new Monster("Orc Air", 12, 12, "Aerial").getInfo()
console.log(orc)