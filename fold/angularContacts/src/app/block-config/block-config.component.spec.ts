import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockConfigComponent } from './block-config.component';

describe('BlockConfigComponent', () => {
  let component: BlockConfigComponent;
  let fixture: ComponentFixture<BlockConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
