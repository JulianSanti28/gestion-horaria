import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauploadComponent } from './caupload.component';

describe('CauploadComponent', () => {
  let component: CauploadComponent;
  let fixture: ComponentFixture<CauploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
