import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarofertaComponent } from './cargaroferta.component';

describe('CargarofertaComponent', () => {
  let component: CargarofertaComponent;
  let fixture: ComponentFixture<CargarofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarofertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
