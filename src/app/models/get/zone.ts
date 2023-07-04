import { RegionMaster } from "./region";

export interface ZoneMaster {
  zoneId: number;
  zoneName: string;
  region: {
    regionId: number;
    regionName: string;
  };
}
