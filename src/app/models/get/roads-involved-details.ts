export interface RoadsInvolvedDetailsTransaction{
  public decimal? AccidentId { get; set; }

  public string Hid { get; set; } = null!;

  public int PavementTypeId { get; set; }

  public int RoadSurfaceId { get; set; }

  public int RoadCarriagewayId { get; set; }

  //[ForeignKey("AccidentId")]
  public virtual AccidentDetailsTransactionEntity? Accident { get; set; }
  //[ForeignKey("Hid")]
  public virtual HighwayMasterEntity HidNavigation { get; set; } = null!;
  //[ForeignKey("PavementTypeId")]
  public virtual PavementTypeLookupEntity PavementType { get; set; } = null!;
  //[ForeignKey("RoadCarriagewayId")]
  public virtual RoadCarriagewayTypeLookupEntity RoadCarriageway { get; set; } = null!;
  //[ForeignKey("RoadSurfaceId")]
  public virtual RoadSurfaceConditionLookupEntity RoadSurface { get; set; } = null!;

}
