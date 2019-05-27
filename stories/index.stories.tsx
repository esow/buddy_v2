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
  comment: "asd asidjcwksdopfksopdkf opskdfop ksopdfkop skdf",
  name: "Trolleren",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
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

const player2 = {
  "username": "Ninja",
  "total": {
    "totalGamesWon": 5886,
    "totalGamesPlayed": 13089
  },
  "squad": {
    "top6finishes": 2727,
    "top3finishes": 2316,
    "killDeathRatio": 10.07008009153318,
    "gamesWon": 1965,
    "gamesPlayed": 5461
  },
  "solo": {
    "top25finishes": 3295,
    "top10finishes": 2680,
    "killDeathRatio": 10.51566447700859,
    "gamesWon": 1943,
    "gamesPlayed": 5901
  },
  "platform": "pc",
  "duo": {
    "top5finishes": 2541,
    "top12finishes": 3092,
    "killDeathRatio": 10.242835130970724,
    "gamesWon": 1978,
    "gamesPlayed": 5223
  },
  "name": "Ninja",
  "languages": [
    "za"
  ],
  "ageGroup": "interval1",
  "voiceChat": [
    true
  ],
  "id": "48fdd890-d7ce-409f-8355-1c7238c1d825",
  "game": "fortnite",
  "criteria": {
    "ageGroups": {
      "interval1": true,
      "interval2": true,
      "interval3": true
    },
    "voiceChat": {
      "YES": true,
      "NO": true
    },
    "ignoreLanguage": false
  },
  "gameInfo": {
    "platform": "pc",
    "gamesPlayed": 1,
    "gameCriteria": {
      "minGamesPlayed": 1
    }
  }
}

storiesOf("Button", module)
  .add("with text", () => <MatchingPage matches={[player, player2]} criteria={true} />);
