import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamQuestionComponent } from './add-exam-question.component';

describe('AddExamQuestionComponent', () => {
  let component: AddExamQuestionComponent;
  let fixture: ComponentFixture<AddExamQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExamQuestionComponent]
    });
    fixture = TestBed.createComponent(AddExamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
