import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrixasPageComponent } from './orixas-page.component';

describe('OrixasPageComponent', () => {
  let component: OrixasPageComponent;
  let fixture: ComponentFixture<OrixasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrixasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrixasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
