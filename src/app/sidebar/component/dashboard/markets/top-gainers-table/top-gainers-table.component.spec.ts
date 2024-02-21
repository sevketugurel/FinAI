import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGainersTableComponent } from './top-gainers-table.component';

describe('TopGainersTableComponent', () => {
  let component: TopGainersTableComponent;
  let fixture: ComponentFixture<TopGainersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopGainersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopGainersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
