export interface Cosmetics {
    results : {
        id : string;
        name : string;
        description : string;
        rarity : string;
        count : number;
        icon : string;
    }[];
    page : number;
    totalCosmetics : number;
    totalCount : number;
    showingVersion : string;
}