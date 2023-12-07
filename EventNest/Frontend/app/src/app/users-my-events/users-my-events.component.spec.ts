import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMyEventsComponent } from './users-my-events.component';

describe('UsersMyEventsComponent', () => {
  let component: UsersMyEventsComponent;
  let fixture: ComponentFixture<UsersMyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersMyEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
