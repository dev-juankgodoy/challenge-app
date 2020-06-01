import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaNavbarComponent } from './renta-navbar.component';

describe('RentaNavbarComponent', () => {
  let component: RentaNavbarComponent;
  let fixture: ComponentFixture<RentaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
