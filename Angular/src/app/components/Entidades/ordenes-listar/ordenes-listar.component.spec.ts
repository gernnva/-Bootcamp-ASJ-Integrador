import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesListarComponent } from './ordenes-listar.component';

describe('OrdenesListarComponent', () => {
  let component: OrdenesListarComponent;
  let fixture: ComponentFixture<OrdenesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesListarComponent]
    });
    fixture = TestBed.createComponent(OrdenesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
