import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLosersTableComponent } from './top-losers-table.component';

describe('TopLosersTableComponent', () => {
  let component: TopLosersTableComponent;
  let fixture: ComponentFixture<TopLosersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLosersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopLosersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
