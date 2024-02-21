import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDialogComponent } from './stocks-dialog.component';

describe('StocksDialogComponent', () => {
  let component: StocksDialogComponent;
  let fixture: ComponentFixture<StocksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
