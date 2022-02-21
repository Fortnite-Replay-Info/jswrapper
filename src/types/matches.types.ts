export interface Matches {
    matches : {
        matchId : string;
        lengthInMs : number;
        playerCount : number;
        teamCount : number;
        matchStarted : string;
        mode : string;
        isValid : boolean;
        recordingPlayer : number;
        isClientRecorded : boolean;
        minorVersion : number;
        majorVersion : number;
    }[];
    player : {
        id : number;
        playerId : string;
        kills : number;
        deaths : number;
        matchesPlayed : number;
        wins : number;
        totalPlacement : number;
        mode : string;
        minorVersion : number;
        majorVersion : number;
        createdAt : string;
        updatedAt : string;
        matches : {
            id : number;
            matchId : string;
            realMatchId : string;
            lengthInMs : number;
            playerCount : number;
            teamCount : number;
            matchStarted : string;
            mode : string;
            isValid : boolean;
            recordingPlayer : number;
            isClientRecorded : boolean;
            minorVersion : number;
            majorVersion : number;
            createdAt : string;
            updatedAt : string;
            PlayerMatch : {
                playerId : number;
                matchId : string;
                createdAt : string;
                updatedAt : string;
            }
        }[]
    }[]
}