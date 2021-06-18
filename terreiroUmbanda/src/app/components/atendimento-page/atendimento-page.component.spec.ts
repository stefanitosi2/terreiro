import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoPageComponent } from './atendimento-page.component';

describe('AtendimentoPageComponent', () => {
  let component: AtendimentoPageComponent;
  let fixture: ComponentFixture<AtendimentoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
