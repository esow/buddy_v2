import * as React from "react";

import { storiesOf } from "@storybook/react";
import MatchingPage from "../src/pages/matchingpage/MatchingPage";

const player = {
  username: "Trolleren",
  total: {
    gamesWon: 0,
    gamesPlayed: 22
  },
  squad: {
    top6finishes: 3,
    top3finishes: 1,
    killDeathRatio: 0.6111111111111112,
    gamesWon: 0,
    gamesPlayed: 18
  },
  solo: {
    top25finishes: 0,
    top10finishes: 0,
    killDeathRatio: 0.375,
    gamesWon: 0,
    gamesPlayed: 8
  },
  platform: "pc",
  duo: {
    top5finishes: 1,
    top12finishes: 2,
    killDeathRatio: 0.7142857142857143,
    gamesWon: 0,
    gamesPlayed: 14
  },
  comment: "asd",
  name: "Trolleren",
  languages: [
    "za"
  ],
  ageGroup: "interval1",
  voiceChat: [
    true
  ],
  id: "20423d24-6351-4bb3-abbe-5e4f0fab05b3",
  game: "fortnite",
  criteria: {
    ageGroups: {
      interval1: true,
      interval2: true,
      interval3: true
    },
    voiceChat: {
      YES: true,
      NO: true
    },
    ignoreLanguage: false
  },
  gameInfo: {
    platform: "pc",
    gamesPlayed: 1,
    gameCriteria: {
      minGamesPlayed: 1
    }
  }
};

storiesOf("Button", module)
  .add("with text", () => <MatchingPage matches={[player]} criteria={true} />);
