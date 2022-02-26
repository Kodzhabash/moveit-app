import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveitComponentsComponent } from './moveit-components.component';

describe('MoveitComponentsComponent', () => {
  let component: MoveitComponentsComponent;
  let fixture: ComponentFixture<MoveitComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveitComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveitComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
