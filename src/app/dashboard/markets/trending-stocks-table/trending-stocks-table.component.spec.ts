import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingStocksTableComponent } from './trending-stocks-table.component';

describe('TrendingStocksTableComponent', () => {
  let component: TrendingStocksTableComponent;
  let fixture: ComponentFixture<TrendingStocksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingStocksTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingStocksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
