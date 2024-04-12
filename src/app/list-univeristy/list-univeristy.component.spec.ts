import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniveristyComponent } from './list-univeristy.component';

describe('ListUniveristyComponent', () => {
  let component: ListUniveristyComponent;
  let fixture: ComponentFixture<ListUniveristyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUniveristyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListUniveristyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
