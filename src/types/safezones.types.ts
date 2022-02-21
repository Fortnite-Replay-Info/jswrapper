export interface SafeZones {
    success: boolean;
    positions : {
        zone1 : {
            x : number;
            y : number;
        };
        zone2 : {
            x : number;
            y : number;
        };
        zone3 : {
            x : number;
            y : number;
        };
        zone4 : {
            x : number;
            y : number;
        };
        zone5 : {
            x : number;
            y : number;
        };
        zone6 : {
            x : number;
            y : number;
        };
        zone7 : {
            x : number;
            y : number;
        };
        zone8 : {
            x : number;
            y : number;
        };
        zone9 : {
            x : number;
            y : number;
        };
        version : string;
    }[];
    totalPages : number;
    page : number;
    resultsPerPage : number;
    playlist : string
}