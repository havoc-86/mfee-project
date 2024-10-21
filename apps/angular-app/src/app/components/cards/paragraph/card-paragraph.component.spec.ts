import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardParagraphComponent } from './card-paragraph.component';

describe('CardParagraphComponent', () => {
  let component: CardParagraphComponent;
  let fixture: ComponentFixture<CardParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardParagraphComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
