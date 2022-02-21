export interface Tournaments {
    tournaments : {
        playerStats : {
            kills : number;
            points : number;
            wins : number;
            matches : number;
        };
        tournamentData : {
            eventId : string;
            windowId : string;
        };
    }[];
    accountInfo : {
        id : string;
        displayName : string;
        links : {};
        externalAuths : {};
    }
}