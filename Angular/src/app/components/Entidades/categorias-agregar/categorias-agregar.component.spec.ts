import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasAgregarComponent } from './categorias-agregar.component';

describe('CategoriasAgregarComponent', () => {
  let component: CategoriasAgregarComponent;
  let fixture: ComponentFixture<CategoriasAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasAgregarComponent]
    });
    fixture = TestBed.createComponent(CategoriasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
