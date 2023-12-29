import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LifesNoTimePage } from './lifes-no-time.page';

describe('LifesNoTimePage', () => {
  let component: LifesNoTimePage;
  let fixture: ComponentFixture<LifesNoTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LifesNoTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
