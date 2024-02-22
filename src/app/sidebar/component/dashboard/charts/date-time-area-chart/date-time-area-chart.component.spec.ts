import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeAreaChartComponent } from './date-time-area-chart.component';

describe('DateTimeAreaChartComponent', () => {
  let component: DateTimeAreaChartComponent;
  let fixture: ComponentFixture<DateTimeAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimeAreaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateTimeAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
