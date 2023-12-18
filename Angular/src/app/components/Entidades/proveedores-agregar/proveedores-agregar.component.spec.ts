import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresAgregarComponent } from './proveedores-agregar.component';

describe('ProveedoresAgregarComponent', () => {
  let component: ProveedoresAgregarComponent;
  let fixture: ComponentFixture<ProveedoresAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresAgregarComponent]
    });
    fixture = TestBed.createComponent(ProveedoresAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
