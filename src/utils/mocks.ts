
export interface User {

	username: string;
	total: {
		totalGamesWon: number,
		totalGamesPlayed: number
	};
	duo: {
		top5finishes: number,
		top3finishes: number,
		top1finishes: number,
		killDeathRatio: number,
		gamesWon: number,
		gamesPlayed: number
	};
}