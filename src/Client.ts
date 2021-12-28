import axios from 'axios';

export class Client {
    private readonly _apiKey: string;
    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }
    /**
     * Get the versions the API has data of
     * @param page Get a specific page
     * @returns {Promise<object>} Object with the versions
     */
    public async getVersions(page: number = 0): Promise<any>{
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
     * @param version Versions of the cosmetics to get
     * @param page Specific page of the cosmetics to get
     */
    public async getCosmetics(type : string = "character", version : string, page: number = 0) {
        const versions = await axios.get("https://fortnite-replay.info/api/v1/versions")
        .catch(() => {
            throw new Error("API Error");
        })
        let majorversion = 0
        let minorversion = 0
        versions.data.versions.forEach((r: { majorVersion: number; }) => {
            if(r.majorVersion > majorversion) majorversion = r.majorVersion;
        })
        versions.data.versions.forEach((r: { minorVersion: number; majorVersion: number; }) => {
            if(r.minorVersion > minorversion && r.majorVersion === majorversion) minorversion = r.minorVersion;
        })
        if(version.split(".").length === 2) { [majorversion, minorversion] = version.split(".").map(Number); }
        const res = await axios.get(`https://fortnite-replay.info/api/v1/cosmetics`, {
            params: {
                type,
                version: `${majorversion}.${minorversion}`,
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
     * @returns {Promise<object>} Object with the landing spots
     */
    public async getLandingSpots(version: string, page: number = 0) {
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
}