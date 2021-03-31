import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLayeredComponent } from './tree-layered.component';

describe('TreeLayeredComponent', () => {
  let component: TreeLayeredComponent;
  let fixture: ComponentFixture<TreeLayeredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeLayeredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLayeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
