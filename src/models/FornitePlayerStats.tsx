export interface AgeGroups {
	interval1: boolean;
	interval2: boolean;
	interval3: boolean;
}

export interface VoiceChat {
	YES: boolean;
	NO: boolean;
}

export interface Criteria {
	ageGroups: AgeGroups;
	voiceChat: VoiceChat;
	ignoreLanguage: boolean;
}

export interface GameCriteria {
	minGamesPlayed: number;
}

export interface GameInfo {
	platform: string;
	gamesPlayed: number;
	gameCriteria: GameCriteria;
}

export interface FortnitePlayerStats {
	name: String;
	id: String;
	game: String;

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
	voiceChat: boolean[];
	ageGroup: string;
	comment: string;
	languages: string[];
	criteria: Criteria;
	gameInfo: GameInfo;
}
