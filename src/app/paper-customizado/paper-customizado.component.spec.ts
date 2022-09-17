import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCustomizadoComponent } from './paper-customizado.component';

describe('PaperCustomizadoComponent', () => {
  let component: PaperCustomizadoComponent;
  let fixture: ComponentFixture<PaperCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
