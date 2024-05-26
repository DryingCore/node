export default class UserCharacter {
	constructor(name, blood, cityFrom) {
		if (typeof name !== "string" || name.trim() === "") throw new Error("Name is required and must be a non-empty string");
		if (typeof blood !== "string" || blood.trim() === "") throw new Error("Blood is required and must be a non-empty string");
		if (typeof cityFrom !== "string" || cityFrom.trim() === "") throw new Error("City is required and must be a non-empty string");

		this.name = name;
		this.blood = blood;
		this.cityFrom = cityFrom;
	}

	getInfo() {
		return `Name: ${this.name}, Breed: ${this.blood}, City: ${this.cityFrom}`;
	}
}
