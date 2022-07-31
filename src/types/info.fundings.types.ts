export type FundingInfo = Root2[]

export interface Root2 {
  start: string
  end: string
  index: number
  choices: Choices
}

export interface Choices {
  "1": N1
  "2": N2
  "3": N3
}

export interface N1 {
  code: string
  latestVersion: number
  islandType: string
  islandPlotTemplate: any
  publishedDate: string
  introduction: string
  title: string
  description: string
  creator: string
  image: string
  promotion_image: string
  youtube: any
  tags: string[]
  matchmaking: Matchmaking
  status: string
  video: string
}

export interface Matchmaking {
  selectedJoinInProgressType: number
  playersPerTeam: number
  maximumNumberOfPlayers: number
  override_Playlist: string
  playerCount: number
  mmsType: string
  mmsPrivacy: string
  numberOfTeams: number
  bAllowJoinInProgress: boolean
  minimumNumberOfPlayers: number
  joinInProgressTeam: number
}

export interface N2 {
  code: string
  latestVersion: number
  islandType: string
  islandPlotTemplate: any
  publishedDate: string
  introduction: string
  title: string
  description: string
  creator: string
  image: string
  promotion_image: string
  youtube: any
  tags: string[]
  matchmaking: Matchmaking2
  status: string
  video?: string
}

export interface Matchmaking2 {
  selectedJoinInProgressType: number
  playersPerTeam: number
  maximumNumberOfPlayers: number
  override_Playlist: string
  playerCount: number
  mmsType: string
  mmsPrivacy: string
  numberOfTeams: number
  bAllowJoinInProgress: boolean
  minimumNumberOfPlayers: number
  joinInProgressTeam: number
}

export interface N3 {
  code: string
  latestVersion: number
  islandType: string
  islandPlotTemplate: any
  publishedDate: string
  introduction: string
  title: string
  description: string
  creator: string
  image: string
  promotion_image: string
  youtube: any
  tags: string[]
  matchmaking: Matchmaking3
  status: string
  video?: string
}

export interface Matchmaking3 {
  selectedJoinInProgressType: number
  playersPerTeam: number
  maximumNumberOfPlayers: number
  override_Playlist: string
  playerCount: number
  mmsType: string
  mmsPrivacy: string
  numberOfTeams: number
  bAllowJoinInProgress: boolean
  minimumNumberOfPlayers: number
  joinInProgressTeam: number
}
