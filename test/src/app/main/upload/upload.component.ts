import { DataService } from '../service/dataservice';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ResponsiveTableHelpers } from './uploadhelpers.data';
import { MatPaginator, MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class uploadComponent implements OnInit {

  selectedIndex: number;
  userForm: FormGroup;
  fieldItems: FormArray;
  title = "upload Component";
  datarows = [];
  cmpRows = [];
  aopRows = [];
  eduRows = [];
  expRows = [];
  sPrg = null;
  constructor(private ds: DataService, private fb: FormBuilder) {
    this.buildForm();
    this.selectedIndex = 0;
  }

  ngOnInit() {
    //this.getData();
  }

  buildForm() {
    this.userForm = this.fb.group({
      fieldItems: this.fb.array([this.createItem()])
    });
    this.fieldItems = this.userForm.get('fieldItems') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      'field': ['', [
        Validators.required,
      ]
      ],
      'operator': ['', [
        Validators.required
      ]
      ],
      'value': ['', []]
    });
  }

  addItem(): void {
    if (this.fieldItems.length < 4)
      this.fieldItems.push(this.createItem());
  }

  removeItem(i: number): void {
    this.fieldItems.removeAt(i);
  }

  getData() {
    this.ds.getData().subscribe(item => {
      this.datarows = item.content;
      console.log(this.datarows);
      this.showRows();
    }, err => console.log(err));
  }

  search() {
    this.sPrg = true;
    console.log(this.fieldItems.value);
    this.ds.search(this.fieldItems.value).subscribe(
      response => {
        this.datarows = response.content;
        console.log(this.datarows);
        this.rows = [];
        this.showRows();
        this.sPrg = false;
        this.selectedIndex = 1;
      },
      err => console.log(err) // error path
    );
  }

  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  crows: Array<any> = [];
  edrows: Array<any> = [];
  exrows: Array<any> = [];
  arows: Array<any> = [];

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  pageLength = 0;
  pageSize = 10;
  helpers = ResponsiveTableHelpers;
  @Input() status;
  @Input() actionStatus;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() sort = new EventEmitter();
  @Output() dup = new EventEmitter();

  next(event) {
    if (event.pageSize > this.datarows.length) {
      event.pageSize = this.datarows.length;
    }
    this.rows = [];
    for (var i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
      this.rows = [...this.rows, this.datarows[i]];
    }
    this.pageSize = event.pageSize;
  }

  showRows() {
    for (var i = 0; i < this.pageSize && i < this.datarows.length; i++) {
      this.rows = [...this.rows, this.datarows[i]];
    }
    this.pageLength = this.datarows.length;
  }

  sortData(val) {
  }

  cmp(index: number) {
    this.sPrg = true;
    console.log(this.rows[index]);
    this.ds.cmp(this.rows[index]).subscribe(
      response => {
        if(response){
          console.log("Cmp: " + this.rows[index] + " : resp: " + response);
          this.cmpRows = [response];
          console.log(this.cmpRows);
          this.sPrg = false;
          this.selectedIndex = 2;
        }
      },
      err => { console.log(err); this.sPrg = false;}// error path
    );
  }
  aop(index: number) {
    this.sPrg = true;
    this.ds.aop(this.rows[index]).subscribe(
      response => {
        console.log("AOP: " + this.rows[index] + " : resp: " + response);
        if(response){
          this.aopRows = response;
          console.log(this.aopRows);
          this.sPrg = false;
          this.selectedIndex = 3;
        }
      },
      err => { console.log(err); this.sPrg = false;} // error path
    );

  }
  edu(index: number) {
    this.sPrg = true;
    this.ds.edu(this.rows[index]).subscribe(
      response => {
        if(response){
          console.log("Edu: " + this.rows[index] + " : resp: " + response);
          this.eduRows = response;
          console.log(this.eduRows);
          this.sPrg = false;
          this.selectedIndex = 4;
        }
      },
      err => { console.log(err); this.sPrg = false;} // error path
    );
  }

  exp(index: number) {
    this.sPrg = true;
    this.ds.exp(this.rows[index]).subscribe(
      response => {
        if(response){
          console.log("Exp: " + this.rows[index] + " : resp: " + response);
          this.expRows = response;
          console.log(this.expRows);
          this.sPrg = false;
          this.selectedIndex = 5;
        }
      },
      err =>{ console.log(err); this.sPrg = false;} // error path
    );
  }
}
