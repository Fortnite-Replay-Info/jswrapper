export interface Stats {
  stats: {
    mode: {
      name: string;
      id: string;
    };
    kills: number;
    deaths: number;
    matchesPlayed: number;
    wins: number;
    totalPlacement: number;
  }[];
  versions: [];
  player: {
    id: string;
    displayName: string;
    links: {};
    externalAuths: {};
  };
}
