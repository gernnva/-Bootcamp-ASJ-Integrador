import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAgregarComponent } from './productos-agregar.component';

describe('ProductosAgregarComponent', () => {
  let component: ProductosAgregarComponent;
  let fixture: ComponentFixture<ProductosAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosAgregarComponent]
    });
    fixture = TestBed.createComponent(ProductosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
