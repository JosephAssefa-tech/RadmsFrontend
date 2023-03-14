export interface VehicleDetailsTransaction

{

   AccidentId :number;

   VehicleInvolvedId :number;

   VehicleId :number;

   NumberPlate? :string;

   VehicleAgeId? :number;
  VehicleDefectId? :number;
   DriverName? :string;

  dlcatagoryId :number;
   DriverAge :number;

   EducationLevelId :number;

   DriverExperienceId :number;

   VehicleOwnershipId :number;

   GenderId :number;

   Dlstatus :number;

   DllevelId? :number;

   Dlnumber? :string;

   VehicleRelationId? :number;

   VehicleMovementId :number;
  IsOverSpeed? :number;
 RecordedSpeed? :number;
  IsAlcohalConsumed? :number;
 AlcohalConsumptionLevel? :number;
 ValidInsurance :number;
 AccuseStatus :number;

  public virtual AccidentDetailsTransactionEntity Accident { get; set; } = null!;

  public virtual DrivingLicenceCatagoryLookupEntity Dlcatagory { get; set; } = null!;

  public virtual LicenceLevelLookupEntity? Dllevel { get; set; }

  public virtual DriverExperienceLookupEntity? DriverExperience { get; set; }

  public virtual EducationLevelLookupEntity? EducationLevel { get; set; }

  public virtual VechicleMasterEntity Vehicle { get; set; } = null!;

  public virtual VehicleServiceAgeLookupEntity? VehicleAge { get; set; }

  public virtual VehicleDefectLookupEntity? VehicleDefect { get; set; }

  public virtual VehicleMovementMasterEntity VehicleMovement { get; set; } = null!;

  public virtual VehicleOwnershipLookupEntity VehicleOwnership { get; set; } = null!;

  public virtual VehicleRelationLookupEntity? VehicleRelation { get; set; }

}
