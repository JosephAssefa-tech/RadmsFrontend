import { AccidentCause } from "./accident-detail-model";
import { AccidentType } from "./accident-type";
import { AirConditionType } from "./air-condition";
import { CityMaster } from "./city";
import { CollisionType } from "./collision-type";
import { HighwayMaster } from "./highway-master";
import { HighwayType } from "./highway-type";
import { ImpactType } from "./impact-type";
import { JunctionType } from "./junction-type";
import { LandmarkType } from "./landmark-type";
import { LightCondition } from "./light-condition";
import { PavementType } from "./pavement-type";
import { PoliceStation } from "./police-station";
import { RegionMaster } from "./region";
import { RoadCarriageway } from "./road-carriageway";
import { RoadSurfaceCondition } from "./road-surface-condition";
import { SeverityLevel } from "./severity-level";
import { SpeedLimit } from "./speed-limit";
import { SubCityMaster } from "./subcity";
import { TerrainType } from "./terrain-type";
import { WeatherCondition } from "./weather-condition-model";
import { WoredaMaster } from "./woreda";
import { ZoneMaster } from "./zone";

export interface AccidentDetailsTransaction{
   Lat :number;
   Long :number;
   AccidentId :number;
    DateAndTime :Date
  // what is the below Psid
   Psid :string;
   KebeleName :string;
  //public int UserId { get; set; }
   Piname :string;
   PoliceRecordNumber :string;
  numberOfVehicles:number;
  propertyDamage :number;
  numberofVictims :number;
   Video1? :string;
   Video2? :string;
   Video3? :string;
   Video4? :string;
   Image1:string;
   Image2:string;
   Image3:string;
   Image4:string;
   Image5:string;
   Image6:string;
  submissionFlag:number;
  hid:string;
  accidentLocalName :string;
  accidentType :AccidentType[];
  AirCondition :AirConditionType[];
         CauseofAccident :AccidentCause[];

        City:CityMaster[];

         CollisionType:CollisionType[];

         HidNavigation:HighwayMaster[];

         HighwayType :HighwayType[];

        ImpactType :ImpactType[];

         JunctionType :JunctionType[];

         LandmarkType :LandmarkType[];

       LightCondtion:LightCondition[];

        PavementType :PavementType[];

       Ps :PoliceStation[];

        Region :RegionMaster[];

         RoadCarriageway :RoadCarriageway[];

        RoadSurface :RoadSurfaceCondition[];

         Severity :SeverityLevel[];

        SpeedLimit:SpeedLimit[];

        SubCity :SubCityMaster[];

         TerrianType :TerrainType[];

       // public virtual UserMasterEntity User { get; set; } = null!;

        WeatherCond :WeatherCondition[];

         Woreda :WoredaMaster[];

         ZoneMasterEntity?:ZoneMaster[];
}
