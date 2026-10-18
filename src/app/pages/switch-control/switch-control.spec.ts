import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchControl } from './switch-control';

describe('SwitchControl', () => {
  let component: SwitchControl;
  let fixture: ComponentFixture<SwitchControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchControl],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
