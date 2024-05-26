export default class Monster {
	constructor(name, hp, power, type) {
		if (typeof name !== "string" || name.trim() === "") throw new Error("Name is required and must be a non-empty string");
		if (typeof hp !== "number" || isNaN(hp)) throw new Error("HP is required and must be a number");
		if (typeof power !== "number" || isNaN(power)) throw new Error("Power is required and must be a number");
		if (typeof type !== "string" || type.trim() === "") throw new Error("Type is required and must be a non-empty string");

		this.name = name;
		this.hp = hp;
		this.power = power;
		this.type = type;
	}

	getInfo() {
		return `Name: ${this.name}, Health: ${this.hp}, Power: ${this.power}, Type: ${this.type}`;
	}
}
