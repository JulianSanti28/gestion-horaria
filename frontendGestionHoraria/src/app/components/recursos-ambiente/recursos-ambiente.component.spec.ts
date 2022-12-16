import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosAmbienteComponent } from './recursos-ambiente.component';

describe('RecursosAmbienteComponent', () => {
  let component: RecursosAmbienteComponent;
  let fixture: ComponentFixture<RecursosAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosAmbienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
