import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerComponent } from './grid-container.component';

describe('BodyContainerComponent', () => {
  let component: GridContainerComponent;
  let fixture: ComponentFixture<GridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
