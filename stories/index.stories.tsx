import * as React from "react";

import { storiesOf } from "@storybook/react";
import MatchingPage from "../src/pages/matchingpage/MatchingPage";
import MatchTileHeader from "../src/components/MatchTable/MatchTableTile/MatchTileHeader";
import { Grid, Header, Segment } from "semantic-ui-react";

const player = {
  username: "Trolloo",
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
  comment: "asdopdfkop skdf",
  name: "Trolloo",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "2024-6351-4bb3-abbe-5e4f0fab05b3",
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
  username: "Ninja",
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
  comment: "asd asidjcwsopdfkop skdf",
  name: "Ninja",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "20423d24-6351-4bb3-abbe-5b3",
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


const player3 = {
  username: "Ninjo",
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
  comment: "asd asidjcwsopdfkop skdf",
  name: "Ninjo",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "20423d24-6351-4bb3-abbe-5e0fab05b3",
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

const player4 = {
  username: "Troll",
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
  comment: "asd asidjcwsopdfkop skdf",
  name: "Troll",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "2046351-4bb3-abbe-5e4f0fab05b3",
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

const player5 = {
  username: "Troll",
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
  comment: "asd asidjcwsopdfkop skdf",
  name: "Troll",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "20be-5e4f0fab05b3",
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

const player6 = {
  username: "Troll",
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
  comment: "asd asidjcwsopdfkop skdf",
  name: "Troll",
  languages: [
    "za",
    "dk",
  ],
  ageGroup: "interval2",
  voiceChat: [
    false
  ],
  id: "20423be-5e4f0fab05b3",
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

const myCriteria = {
  ageGroups: {
    interval1: true,
    interval2: true,
    interval3: true
  },
  voiceChat: {
    YES: true,
    NO: false
  },
  ignoreLanguage: false
}

storiesOf("Matching page", module)
  .add("with text", () => <MatchingPage matches={[player, player2, player3, player4, player5, player6]} criteria={myCriteria} />)
  .add("Header", () => <MatchTileHeader></MatchTileHeader>)
  .add("header basic", () => <Grid columns="equal" textAlign="center">
    <Grid.Row>
      <Grid.Column width={4}>
        <Segment size="small"> Player name </Segment>
      </Grid.Column>
      <Grid.Column>
        <Header size="small"> Language </Header>
      </Grid.Column>
      <Grid.Column>
        <Header size="small"> Age Group </Header>
      </Grid.Column>
      <Grid.Column>
        <Header size="small"> Voice chat? </Header>
      </Grid.Column>
      <Grid.Column textAlign={"center"} width={3}>
        <Header size="small"> Send request </Header>
      </Grid.Column>
      <Grid.Column width={2}>
        <Header size="small"> Send request </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>)
  .add("with text", () => <MatchingPage matches={[player, player2, player3, player4, player5, player6]} criteria={true} />);
