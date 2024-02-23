import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestVolumeTableComponent } from './highest-volume-table.component';

describe('HighestVolumeTableComponent', () => {
  let component: HighestVolumeTableComponent;
  let fixture: ComponentFixture<HighestVolumeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighestVolumeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestVolumeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
