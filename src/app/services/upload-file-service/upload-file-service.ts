import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegionBasedSummaryData } from "src/app/models/get/SummaryCount";
import { environment } from "src/environments/environment";
import { BaseService } from "../base-service/BaseService";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UploadFileService {

    trendAnalysisData=`${environment.apiUrl}AccidentDetailsTransaction/import`;
  
    constructor(protected httpClient: HttpClient)  {
      
    }
    uploadFile(formData: FormData): Observable<any> {
        // Replace with your API endpoint for file upload
     
        return this.httpClient.post(this.trendAnalysisData, formData);
      }


  }