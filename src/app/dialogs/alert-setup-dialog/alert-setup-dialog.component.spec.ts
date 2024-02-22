import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSetupDialogComponent } from './alert-setup-dialog.component';

describe('AlertSetupDialogComponent', () => {
  let component: AlertSetupDialogComponent;
  let fixture: ComponentFixture<AlertSetupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSetupDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertSetupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
