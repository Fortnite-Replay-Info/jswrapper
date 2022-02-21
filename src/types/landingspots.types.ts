export interface LandingSpots {
    success: boolean;
    positions : {
        x : number;
        y : number;
        z : number;
        version : string;
    }[];
    totalPages : number;
    page : number;
    resultsPerPage : number;
}