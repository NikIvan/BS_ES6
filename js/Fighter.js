export default class Fighter {
	constructor(name = 'Anonymous fighter', power = 5, health = 100) {
		this.name = name;
		this.power = power <= 0 ? 5 : power;
		this.health = health <= 0 ? 100 : health;
		this.type = 'Regular fighter';
	}

	setDamage(damage) {
		this.health -= damage;
		console.log(`health left: ${this.health}`);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		console.log(`${this.type} ${this.name} hits ${enemy.type} ${enemy.name} for ${damage}`);
		enemy.setDamage(damage);
	}

	getStats() {
		console.log('Name: ' + this.name);
		console.log('Power: ' + this.power);
		console.log('Health: ' + this.health);
	}
}