import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavambientesComponent } from './navambientes.component';

describe('NavambientesComponent', () => {
  let component: NavambientesComponent;
  let fixture: ComponentFixture<NavambientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavambientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavambientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
