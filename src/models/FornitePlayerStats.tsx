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
}

export interface GameInfo {
	platform: string;
	region: string;
	gameCriteria: GameCriteria;
}

export interface FortnitePlayerStats {
	name: string;
	id: string;
	game: string;

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
