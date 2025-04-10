import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstadoComponent } from './formulario-estado.component';

describe('FormularioEstadoComponent', () => {
  let component: FormularioEstadoComponent;
  let fixture: ComponentFixture<FormularioEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
