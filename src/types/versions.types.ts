export interface Versions {
    success: boolean;
    versions : {
        lastUpdateTime : string;
        lastHeatmapCreationTime : string;
        minorVersion : number;
        majorVersion : number;
    }[];
    totalPages : number;
    page : number;
    resultsPerPage : number;
}