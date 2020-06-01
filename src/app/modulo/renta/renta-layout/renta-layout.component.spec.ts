import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaLayoutComponent } from './renta-layout.component';

describe('RentaLayoutComponent', () => {
  let component: RentaLayoutComponent;
  let fixture: ComponentFixture<RentaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
