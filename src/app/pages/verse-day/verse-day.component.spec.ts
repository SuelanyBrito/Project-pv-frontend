import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerseDayComponent } from './verse-day.component';

describe('VerseDayComponent', () => {
  let component: VerseDayComponent;
  let fixture: ComponentFixture<VerseDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseDayComponent]
    });
    fixture = TestBed.createComponent(VerseDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});