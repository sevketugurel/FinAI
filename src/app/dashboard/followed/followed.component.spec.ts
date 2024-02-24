import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedComponent } from './followed.component';

describe('FollowedComponent', () => {
  let component: FollowedComponent;
  let fixture: ComponentFixture<FollowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
