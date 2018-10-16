import * as React from "react";
import { storiesOf } from "@storybook/react";
import MatchTable from "../src/components/MatchTable/MatchTable";

storiesOf("Match table", module)
    .add("With no matches", () => (
        <MatchTable
            matches={[]}
            requestMatch={(player: any) => player}
        />)
    )    
    .add("With 1 match", () => (
        <MatchTable
            matches={[{id: 1, region: "EU", name: "Hans" , comment:  "SOVS"}]} 
            requestMatch={(player: any) => player}
        />)
	);