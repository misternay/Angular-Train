import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponantComponent } from './list-componant.component';

describe('ListComponantComponent', () => {
  let component: ListComponantComponent;
  let fixture: ComponentFixture<ListComponantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
