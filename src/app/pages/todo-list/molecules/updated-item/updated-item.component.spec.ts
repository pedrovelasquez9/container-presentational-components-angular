import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedItemComponent } from './updated-item.component';

describe('UpdatedItemComponent', () => {
  let component: UpdatedItemComponent;
  let fixture: ComponentFixture<UpdatedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
