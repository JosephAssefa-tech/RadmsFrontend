import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  data = [
    {
      name: 'Addis Ababa',
      age: 1,
      address: 'Edit '
    },
    {
      name: 'Oromiya',
      age: 2,
      address: 'Edit '
    },
    {
      name: 'Amhara',
      age: 3,
      address: 'Edit '
    }
    ,
    {
      name: 'Harar',
      age: 4,
      address: 'Edit '
    }
    ,
    {
      name: 'DireDewa',
      age: 5,
      address: 'Edit '
    }
  ];
  inputValue: string | undefined;
  regionMaster=[] as RegionMaster[];


  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private modal: NzModalService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      region: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm(): void {
    // Do something with the form data here
  }
  showModal(): void {
    const modalRef = this.modal.create({
      nzTitle: 'Region Master',
      nzContent: SharedModalComponent,
      nzFooter: null
    });
  }

}
