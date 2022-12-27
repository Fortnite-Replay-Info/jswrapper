import axios from 'axios';
import { Versions } from './types/versions.types';
import { Cosmetics } from './types/cosmetics.types';
import { LandingSpots } from './types/landingspots.types';
import { Stats } from './types/stats.types';
import { Matches } from './types/matches.types';
import { Tournaments } from './types/tournaments.types';
import { SafeZones } from './types/safezones.types';
import { CurrentFunding } from './types/current.fundings.types';
import { FundingInfo } from './types/info.fundings.types';
import { FundingValues } from './types/values.fundings.types';

export class Client {
    private readonly _apiKey: string;
    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }
    /**
     * Get the versions the API has data of
     * @param page Get a specific page
     * @returns {Promise<Versions>} Object with the versions
     */
    public async getVersions(page: number = 0): Promise<Versions>{
        const res = await axios.get(`https://fortnite-replay.info/api/v1/versions`, {
            params: {
                page
            }
        })
        .catch(err => {
            throw new Error("API Error");
        })
        return res.data;
    }
    /**
     * Get Cosmetic Stats
     * @param type Type of the cosmetics to get
     * @param page Specific page of the cosmetics to get
     */
    public async getLifetimeCosmetics(type : string = "character", page: number = 0): Promise<Cosmetics> {
        const res = await axios.get(`https://fortnite-replay.info/api/v1/cosmetics`, {
            params: {
                type,
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Cosmetic Stats
     * @param type Type of the cosmetics to get
     * @param page Specific page of the cosmetics to get
     */
    public async getCurrentCosmeticsv1(type : string = "character", page: number = 0): Promise<Cosmetics> {
        const res = await axios.get(`https://fortnite-replay.info/api/v1/cosmetics/current`, {
            params: {
                type,
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Cosmetic Stats
     * @param options Options to get cosmetics with
     * @returns 
     */
    public async getCosmetics(options? : {
        type?: string,
        page?: number,
        minimalData?: boolean,
        version?: "recent" | string,
        resultsPerPage?: number
    }): Promise<Cosmetics> {
        // Create an object with all defined options
        let params = {} as {type : string, page : number, minimalData : boolean,  version : "recent" | string, resultsPerPage : number};
        if(options?.type) params["type"] = options.type;
        if(options?.page) params["page"] = options.page;
        if(options?.minimalData) params["minimalData"] = options.minimalData;
        if(options?.version) params["version"] = options.version;
        if(options?.resultsPerPage) params["resultsPerPage"] = options.resultsPerPage;
        const res = await axios.get(`https://fortnite-replay.info/api/v2/cosmetics`, {
            params: {
                ...params
            }
        })
        .catch((e) => {
            console.log(e.request)
            console.error(e.response.data);
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Cosmetic Stats
     * @param version Version of the cosmetics to get
     * @param type Type of the cosmetics to get
     * @param page Specific page of the cosmetics to get
     */
    public async getVersionCosmetics(version : string, type : string = "character", page: number = 0): Promise<Cosmetics> {
        if(!version) throw new Error("Please provide a version")
        const res = await axios.get(`https://fortnite-replay.info/api/v1/cosmetics`, {
            params: {
                version,
                type,
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get the landing spots
     * @param version Version of the cosmetics to get
     * @param page Specific page of the cosmetics to get
     * @returns {Promise<LandingSpots>} Object with the landing spots
     */
    public async getLandingSpots(version: string, page: number = 0): Promise<LandingSpots> {
        const res = await axios.get(`https://fortnite-replay.info/api/v1/landingspots/list`, {
            params: {
                version,
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Matches of a given player
     * @param player Username of the player to get matches from
     * @param version Optionnal version option
     * @param page Optionnal page option
     * @returns {Object}
     */
    public async getMatches(player:string, version:string, page:number = 0) : Promise<Matches> {
        if(!player) throw new Error("Please provide a player username")
        const res = await axios.get(`https://fortnite-replay.info/api/v1/player/search/${player}/matches`, {
            params : {
                version
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Stats of a given player
     * @param player Username of the player to get stats from
     * @param version Optionnal version option
     * @param page Optionnal page option
     * @returns {Object}
     */
    public async getStats(player:string, version:string, page:number = 0) : Promise<Stats> {
        if(!player) throw new Error("Please provide a player username")
        const res = await axios.get(`https://fortnite-replay.info/api/v1/player/search/${player}/stats`, {
            params : {
                version
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Tournaments of a given player
     * @param player Username of the player to get tournaments from
     * @param version Optionnal version option
     * @param page Optionnal page option
     * @returns {Object}
     */
    public async getTournaments(player:string, version:string, page:number = 0): Promise<Tournaments> {
        if(!player) throw new Error("Please provide a player username")
        const res = await axios.get(`https://fortnite-replay.info/api/v1/player/search/${player}/tournaments`, {
            params : {
                version
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /***
     * Get Lifetime Safezones
     * @param page Optionnal page option
     */
    public async getLifetimeSafezones(page: number = 0): Promise<SafeZones> {
        const res = await axios.get(`https://fortnite-replay.info/api/v1/safezones`, {
            params: {
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /***
     * Get Version Safezones
     * @param version Version option
     * @param page Optionnal page option
     */
    public async getVersionSafezones(version : string, page: number = 0): Promise<SafeZones> {
        if(!version) throw new Error("Please provide a version")
        const res = await axios.get(`https://fortnite-replay.info/api/v1/safezones/${version}`, {
            params: {
                page
            }
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Current Funding
     * @returns Current Fundings Object
     */
    public async getCurrentFunding(): Promise<CurrentFunding> {
        const res = await axios.get(`https://funding.fortnite-replay.info/current`, {
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get Current Fundings Info
     * @returns Current fundings info
     */
    public async getFundingsInfo(): Promise<FundingInfo> {
        const res = await axios.get(`https://funding.fortnite-replay.info/info`, {
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Get All Values of the funding (Useful for Graphs)
     * @param index Index of the funding, can be found in info
     * @returns Funding Values for each match parsed
     */
    public async getFundingsValues(index : number):  Promise<FundingValues> {
        const res = await axios.get(`https://funding.fortnite-replay.info/fundings`, {
        })
        .catch((e) => {
            throw new Error(e);
        })
        return res.data;
    }
    /**
     * Ever wanted to get a use ranking of cosmetics you choose? Ever wanted to make it your own custom design? Ever wanted to look for your favorite cosmetic?
     * We've got you covered, make your own, or watch now!
     * @param cosmetics Cosmeyic names or ids you want to get data from
     * @param period Period to get the stats from
     * @param options Additional options
     * @returns Image
     */
    public async getRankingImage(cosmetics : string[], period: "lifetime" | "season" | "version", options : {
        bg? : any,
        season? : string,
        version? : string,
        textcolor? : string,
        blockcolor? : string
    }): Promise<Buffer> {
        if(!period) throw new Error("Please provide a period")
        if(period === "season" && !options.season) throw new Error("Please provide a season")
        if(period === "version" && !options.version) throw new Error("Please provide a version")

        // Attach the bg as a file if provided to match multipart/form-data
        if(options.bg) {
            options.bg = {
                value: options.bg,
                options: {
                    filename: 'stats.png',
                    contentType: 'image/png'
                }
            }
        }

        const res = await axios.post(`https://cosm-gen.fortnite-replay.info/stats`, {
            cosmetics : cosmetics.join(","),
            period,
            options
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .catch((e) => {
            console.log(e)
            throw new Error(e);
        })
        console.log(res)
        return res.data;
    }
    
}
