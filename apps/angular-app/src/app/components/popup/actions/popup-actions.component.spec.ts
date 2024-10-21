import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupActionsComponent } from './popup-actions.component';

describe('PopupActionsComponent', () => {
  let component: PopupActionsComponent;
  let fixture: ComponentFixture<PopupActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
