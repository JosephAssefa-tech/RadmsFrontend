import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AccidentDetailsComponent } from './components/accident-details/accident-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegionComponent } from './components/region/region.component';
import { SideMenuPageComponent } from './components/side-menu-page/side-menu-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { VictimDetailsComponent } from './components/victim-details/victim-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { RoadInvolvedComponent } from './components/road-involved/road-involved.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { ZoneMasterComponent } from './components/zone-master/zone-master.component';
import { WoredaMasterComponent } from './components/woreda-master/woreda-master.component';
import { CityMasterComponent } from './components/city-master/city-master.component';
import { SubcityMasterComponent } from './components/subcity-master/subcity-master.component';
import { WeatherConditionComponent } from './components/weather-condition/weather-condition.component';
import { RoadSurfaceModalComponent } from './shared/road-surface-modal/road-surface-modal.component';
import { HealthConditionComponent } from './components/health-condition/health-condition.component';
import { RoadSurfaceConditionComponent } from './components/road-surface-condition/road-surface-condition.component';
import { LightConditionComponent } from './components/light-condition/light-condition.component';
import { AirConditionComponent } from './components/air-condition/air-condition.component';
import { VechileMasterComponent } from './components/vechile-master/vechile-master.component';
import { VechileDefectComponent } from './components/vechile-defect/vechile-defect.component';
import { VechileMovementMasterComponent } from './components/vechile-movement-master/vechile-movement-master.component';
import { VechileOwnershipComponent } from './components/vechile-ownership/vechile-ownership.component';
import { VechileRelationComponent } from './components/vechile-relation/vechile-relation.component';
import { VechileServiceAgeComponent } from './components/vechile-service-age/vechile-service-age.component';
import { SpeedLimitComponent } from './components/speed-limit/speed-limit.component';
import { AccidentCasuseModalComponent } from './shared/accident-casuse-modal/accident-casuse-modal.component';
import { AccidentTypeModalComponent } from './shared/accident-type-modal/accident-type-modal.component';
import { CollisionTypeModalComponent } from './shared/collision-type-modal/collision-type-modal.component';
import { EmploymentStatusModalComponent } from './shared/employment-status-modal/employment-status-modal.component';
import { LicenseLevelModalComponent } from './shared/license-level-modal/license-level-modal.component';
import { TerianTypeModalComponent } from './shared/terian-type-modal/terian-type-modal.component';
import { SeverityLevelModalComponent } from './shared/severity-level-modal/severity-level-modal.component';
import { PedstrianMovementModalComponent } from './shared/pedstrian-movement-modal/pedstrian-movement-modal.component';
import { PavementTypeModalComponent } from './shared/pavement-type-modal/pavement-type-modal.component';
import { SeatingTypeModalComponent } from './shared/seating-type-modal/seating-type-modal.component';
import { ImpactTypeModalComponent } from './shared/impact-type-modal/impact-type-modal.component';
import { UserTypeModalComponent } from './shared/user-type-modal/user-type-modal.component';
import { VictimMovementModalComponent } from './shared/victim-movement-modal/victim-movement-modal.component';
// import { VictimTypeModalComponent } from './shared/victim-type-modal/victim-type-modal.component';
import { AccidentCauseComponent } from './components/accident-cause/accident-cause.component';
import { AccidentTypeComponent } from './components/accident-type/accident-type.component';
import { CollisionTypeComponent } from './components/collision-type/collision-type.component';
import { LicenseLevelComponent } from './components/license-level/license-level.component';
import { PavementTypeComponent } from './components/pavement-type/pavement-type.component';
import { PedestrianMovementComponent } from './components/pedestrian-movement/pedestrian-movement.component';
import { SeverityLevelComponent } from './components/severity-level/severity-level.component';
import { TerianTypeComponent } from './components/terian-type/terian-type.component';
import { EmploymentStatusComponent } from './components/employment-status/employment-status.component';
import { SeatingTypeComponent } from './components/seating-type/seating-type.component';
import { ImpactTypeComponent } from './components/impact-type/impact-type.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { VictimTypeComponent } from './components/victim-type/victim-type.component';
import { VictimMovementComponent } from './components/victim-movement/victim-movement.component';
import { HighwayMasterComponent } from './components/highway-master/highway-master.component';
import { HighwayTypeComponent } from './components/highway-type/highway-type.component';
import { JunctionTypeComponent } from './components/junction-type/junction-type.component';
import { LandmarkTypeComponent } from './components/landmark-type/landmark-type.component';
import { RoadCarriagewayTypeComponent } from './components/road-carriageway-type/road-carriageway-type.component';
import { EducationLevelComponent } from './components/education-level/education-level.component';
import { DriverExperienceComponent } from './components/driver-experience/driver-experience.component';
import { DriverLicenseCategoryComponent } from './components/driver-license-category/driver-license-category.component';
import { DailyAccidentReportComponent } from './components/reporting/daily-accident-report/daily-accident-report.component';
import { HourlyAccidentReportComponent } from './components/reporting/hourly-accident-report/hourly-accident-report.component';
import { AccidentInvolvedDriversAgeReportComponent } from './components/reporting/accident-involved-drivers-age-report/accident-involved-drivers-age-report.component';
import { AccidentInvolvedDriversSexReportComponent } from './components/reporting/accident-involved-drivers-sex-report/accident-involved-drivers-sex-report.component';
import { AccidentInvolvedDriversEducationLevelReportComponent } from './components/reporting/accident-involved-drivers-education-level-report/accident-involved-drivers-education-level-report.component';
import { DriverAndVehicleRelationshipReportComponent } from './components/reporting/driver-and-vehicle-relationship-report/driver-and-vehicle-relationship-report.component';
import { DrivingExperienceOfDriversReportComponent } from './components/reporting/driving-experience-of-drivers-report/driving-experience-of-drivers-report.component';
import { LevelOfDrivingLicenseReportComponent } from './components/reporting/level-of-driving-license-report/level-of-driving-license-report.component';
import { ServiceAgeOfVehiclesReportComponent } from './components/reporting/service-age-of-vehicles-report/service-age-of-vehicles-report.component';
import { AccidentInvolvedVehicleByTypeReportComponent } from './components/reporting/accident-involved-vehicle-by-type-report/accident-involved-vehicle-by-type-report.component';
import { OwnersAndTypeOfVehiclesReportComponent } from './components/reporting/owners-and-type-of-vehicles-report/owners-and-type-of-vehicles-report.component';
import { VehicleDefectReportComponent } from './components/reporting/vehicle-defect-report/vehicle-defect-report.component';
import { AccidentByRoadTypeReportComponent } from './components/reporting/accident-by-road-type-report/accident-by-road-type-report.component';
import { AccidentByRoadAreaReportComponent } from './components/reporting/accident-by-road-area-report/accident-by-road-area-report.component';
import { AccidentByRoadDividentReportComponent } from './components/reporting/accident-by-road-divident-report/accident-by-road-divident-report.component';
import { AccidentByRoadSurfaceReportComponent } from './components/reporting/accident-by-road-surface-report/accident-by-road-surface-report.component';
import { AccidentByPavementTypeReportComponent } from './components/reporting/accident-by-pavement-type-report/accident-by-pavement-type-report.component';
import { AccidentByJunctionTypeReportComponent } from './components/reporting/accident-by-junction-type-report/accident-by-junction-type-report.component';
import { AccidentByRoadConditionReportComponent } from './components/reporting/accident-by-road-condition-report/accident-by-road-condition-report.component';
import { AccidentByRoadLightConditionReportComponent } from './components/reporting/accident-by-road-light-condition-report/accident-by-road-light-condition-report.component';
import { AccidentByRoadAirConditionReportComponent } from './components/reporting/accident-by-road-air-condition-report/accident-by-road-air-condition-report.component';
import { AccidentByVehicleMovementReportComponent } from './components/reporting/accident-by-vehicle-movement-report/accident-by-vehicle-movement-report.component';
import { AccidentByCollisionTypeReportComponent } from './components/reporting/accident-by-collision-type-report/accident-by-collision-type-report.component';
import { AccidentByPedestrianJobTypeReportComponent } from './components/reporting/accident-by-pedestrian-job-type-report/accident-by-pedestrian-job-type-report.component';
import { AccidentByPedestrianHealthReportComponent } from './components/reporting/accident-by-pedestrian-health-report/accident-by-pedestrian-health-report.component';
import { AccidentByPedestrianMovementReportComponent } from './components/reporting/accident-by-pedestrian-movement-report/accident-by-pedestrian-movement-report.component';
import { AccidentByCauseOfAccidentReportComponent } from './components/reporting/accident-by-cause-of-accident-report/accident-by-cause-of-accident-report.component';
import { NumberOfVictimsInAccidentReportComponent } from './components/reporting/number-of-victims-in-accident-report/number-of-victims-in-accident-report.component';
import { InsuranceDetailReportComponent } from './components/reporting/insurance-detail-report/insurance-detail-report.component';
import { VictimAnimalsReportComponent } from './components/reporting/victim-animals-report/victim-animals-report.component';
import { VictimVehiclesReportComponent } from './components/reporting/victim-vehicles-report/victim-vehicles-report.component';
import { PreviousYearInvestigationReportComponent } from './components/reporting/previous-year-investigation-report/previous-year-investigation-report.component';
import { LegalMeasurementReportComponent } from './components/reporting/legal-measurement-report/legal-measurement-report.component';
import { CategoryOfDrivingLicenseReportComponent } from './components/reporting/category-of-driving-license-report/category-of-driving-license-report.component';

const routes: Routes = [
   //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
 // {path: '', redirectTo: '/login', pathMatch: 'full'},
 { path: '', pathMatch: 'full', redirectTo: '/login' },
 //{ path: '',component:LoginComponent },
  { path: 'login',component:HomeComponent },
  { path: 'side',component:SideMenuPageComponent },
  {path:'home',component:HomeComponent},
  {path:'accident',component:AccidentDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'region',component:RegionComponent},
  {path:'zone',component:ZoneMasterComponent},
  {path:'woreda',component:WoredaMasterComponent},
  {path:'city',component:CityMasterComponent},
  {path:'subcity',component:SubcityMasterComponent},
  {path:'victim',component:VictimDetailsComponent},
  {path:'vehicle',component:VehicleDetailsComponent},
  {path:'roadInvolved',component:RoadInvolvedComponent},
  {path:'advanceSearch',component:AdvanceSearchComponent},
  {path:'weatherCondition', component:WeatherConditionComponent},
  {path:'roadSurface',component:RoadSurfaceConditionComponent},
  {path:'healthCondition',component:HealthConditionComponent},
  {path:'lightCondition',component:LightConditionComponent},
  {path:'airCondition',component:AirConditionComponent},
  {path:'roadSurfaceCondition',component:RoadSurfaceConditionComponent},
  {path:'vechileMaster',component:VechileMasterComponent},
  {path:'vechileDefect',component:VechileDefectComponent},
  {path:'vechileMovement',component:VechileMovementMasterComponent},
  {path:'vechileOwnership',component:VechileOwnershipComponent},
  {path:'vechileRelation',component:VechileRelationComponent},
  {path:'vechileServiceAge',component:VechileServiceAgeComponent},
  {path:'speedLimit',component:SpeedLimitComponent},
  {path:'accidentCause',component:AccidentCauseComponent},
  {path:'accidentType',component:AccidentTypeComponent},
  {path:'collisionType',component:CollisionTypeComponent},
  {path:'licenseLevel',component:LicenseLevelComponent},
  {path:'pavementType',component:PavementTypeComponent},
  {path:'pedestrianMovement',component:PedestrianMovementComponent},
  {path:'severityLevel',component:SeverityLevelComponent},
  {path:'terianType',component:TerianTypeComponent},
  {path:'employmentStatus',component:EmploymentStatusComponent},
  {path:'seatingType',component:SeatingTypeComponent},
  {path:'impactType',component:ImpactTypeComponent},
  {path:'userType',component:UserTypeComponent},
  {path:'victimMovement',component:VictimMovementComponent},
  {path:'victimType',component:VictimTypeComponent},
  {path:'highwayMaster',component:HighwayMasterComponent},
  {path:'highwayType',component:HighwayTypeComponent},
  {path:'junctionType',component:JunctionTypeComponent},
  {path:'landmarkType',component:LandmarkTypeComponent},
  {path:'roadcariagewayType',component:RoadCarriagewayTypeComponent},
  {path:'licenseLevel',component:LicenseLevelComponent},
  {path:'educationLevel',component:EducationLevelComponent},
  {path:'driverExperience',component:DriverExperienceComponent},
  {path:'driverLicenseCategory',component:DriverLicenseCategoryComponent},
  {path:'reports/daily-accident-report', component:DailyAccidentReportComponent},
  {path:'reports/hourly-accident-report', component:HourlyAccidentReportComponent},
  {path:'reports/accident-involved-drivers-age', component:AccidentInvolvedDriversAgeReportComponent},
  {path:'reports/accident-involved-drivers-sex', component:AccidentInvolvedDriversSexReportComponent},
  {path:'reports/accident-involved-drivers-education-level', component:AccidentInvolvedDriversEducationLevelReportComponent},
  {path:'reports/relation-of-driver-and-vehicle', component:DriverAndVehicleRelationshipReportComponent},
  {path:'reports/driving-experience-of-drivers', component:DrivingExperienceOfDriversReportComponent},
  {path:'reports/level-of-driving-lcense', component:LevelOfDrivingLicenseReportComponent},
  {path:'reports/category-of-driving-lcense', component:CategoryOfDrivingLicenseReportComponent},
  {path: 'reports/service-age-of-vehicles', component: ServiceAgeOfVehiclesReportComponent},
  {path:'reports/accident-involved-vehicles-by-type', component: AccidentInvolvedVehicleByTypeReportComponent},
  {path: 'reports/owners-and-vehicle-types', component: OwnersAndTypeOfVehiclesReportComponent},
  {path: 'reports/vehicle-defect', component: VehicleDefectReportComponent},
  {path: 'reports/accident-by-road-type', component:AccidentByRoadTypeReportComponent},
  {path:'reports/accident-by-road-area', component: AccidentByRoadAreaReportComponent},
  {path: 'reports/accident-by-road-devident', component: AccidentByRoadDividentReportComponent},
  {path: 'reports/accident-by-road-surface', component: AccidentByRoadSurfaceReportComponent},
  {path: 'reports/accident-by-pavement-type', component: AccidentByPavementTypeReportComponent},
  {path: 'reports/accident-by-road-junction', component: AccidentByJunctionTypeReportComponent},
  {path: 'reports/accident-by-road-condition', component: AccidentByRoadConditionReportComponent},
  {path: 'reports/accident-by-road-light-condition', component: AccidentByRoadLightConditionReportComponent},
  {path: 'reports/accident-by-road-air-condition', component: AccidentByRoadAirConditionReportComponent},
  {path:'reports/accident-by-vehicle-movement', component: AccidentByVehicleMovementReportComponent},
  {path: 'reports/accident-by-collision-type', component: AccidentByCollisionTypeReportComponent},
  {path: 'reports/accident-by-pedestrian-job-type', component: AccidentByPedestrianJobTypeReportComponent},
  {path: 'reports/accident-by-pedestrian-health', component: AccidentByPedestrianHealthReportComponent},
  {path: 'reports/accident-by-pedestrian-movement', component: AccidentByPedestrianMovementReportComponent},
  {path: 'reports/accident-by-cause-of-accident', component: AccidentByCauseOfAccidentReportComponent},
  {path: 'reports/number-of-victims-in-accident', component: NumberOfVictimsInAccidentReportComponent},
  {path: 'reports/insurance-details', component: InsuranceDetailReportComponent},
  {path: 'reports/victim-animals', component: VictimAnimalsReportComponent},
  {path: 'reports/victim-vehicles', component: VictimVehiclesReportComponent},
  {path: 'reports/previous-year-investigation', component: PreviousYearInvestigationReportComponent},
  {path: 'reports/legal-mesurement', component: LegalMeasurementReportComponent}

 //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
