import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LifesWithTimePage } from './lifes-with-time.page';

describe('LifesWithTimePage', () => {
  let component: LifesWithTimePage;
  let fixture: ComponentFixture<LifesWithTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LifesWithTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
