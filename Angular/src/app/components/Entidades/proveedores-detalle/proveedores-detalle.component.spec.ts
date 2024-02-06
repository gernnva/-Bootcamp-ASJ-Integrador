import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresDetalleComponent } from './proveedores-detalle.component';

describe('ProveedoresDetalleComponent', () => {
  let component: ProveedoresDetalleComponent;
  let fixture: ComponentFixture<ProveedoresDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresDetalleComponent]
    });
    fixture = TestBed.createComponent(ProveedoresDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
