import Fighter from './Fighter'

export default class ImprovedFighter extends Fighter {
	constructor(name, power, health, pointModifier = 2) {
		super(name, power, health);
		this.pointModifier = (pointModifier <= 1) ? 2 : pointModifier;
		this.type = 'Improved fighter';
	}

	doubleHit(enemy, point) {
		let improvedPoint = point * this.pointModifier;
		this.hit(enemy, improvedPoint);
	}
}