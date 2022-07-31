export type FundingValues = FundingValue[]

export interface FundingValue {
    time : string,
    fundingIndex : number,
    matchId : string,
    option1 : number,
    option2 : number,
    option3 : number
}