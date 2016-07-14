import 'babel-polyfill';
import Fighter from './Fighter';
import ImprovedFighter from './ImprovedFighter'

document.addEventListener('DOMContentLoaded', () => {
	let regularFighter = new Fighter('Alex', 7, 120);
	let improvedFighter = new ImprovedFighter('Bob', 7, 120);

	fight(regularFighter, improvedFighter, 3, 4, 5, 6, 4, 4, 5, 4, 3, 3);

	document.getElementById('console').innerHTML = `Hello ${world}!`;
});


function fight(regularFighter, improvedFighter, ...points) {
	points.reverse();

	const fighters = [regularFighter, improvedFighter];
	let next = 0;
	let winner = false;
	
	// Game cycle
	while(true) {
		let point = points.pop();
		
		fighters[next].hit(fighters[+!next], point);

		winner = fighters.some((fighter) => {
			return fighter.health <= 0;
		});
		
		if(winner) {
			console.log(`${fighters[next].type} ${fighters[next].name} is a winner. Well done!`);
			break;
		} else if(!points.length) {
			console.log('Pat.');
			
			fighters.forEach((fighter) => {
				console.log(`${fighter.type} ${fighter.name} has ${fighter.health} HP`);
			});

			break;
		}

		next = +!next;
	}

	console.log('Game over');
}