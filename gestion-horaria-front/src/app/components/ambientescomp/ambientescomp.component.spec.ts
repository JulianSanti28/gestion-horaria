import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientescompComponent } from './ambientescomp.component';

describe('AmbientescompComponent', () => {
  let component: AmbientescompComponent;
  let fixture: ComponentFixture<AmbientescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientescompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbientescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
