import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadownloadComponent } from './datadownload.component';

describe('DatadownloadComponent', () => {
  let component: DatadownloadComponent;
  let fixture: ComponentFixture<DatadownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
