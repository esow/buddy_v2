
export interface User {

	username: string;
	total: {
		gamesWon: number,
		gamesPlayed: number
	};
	solo: {
		top25finishes: number,
		top10finishes: number,
		killDeathRatio: number,
		gamesWon: number,
		gamesPlayed: number
	};
	duo: {
		top12finishes: number,
		top5finishes: number,
		killDeathRatio: number,
		gamesWon: number,
		gamesPlayed: number
	};
	squad: {
		top6finishes: number,
		top3finishes: number,
		killDeathRatio: number,
		gamesWon: number,
		gamesPlayed: number
	};
}