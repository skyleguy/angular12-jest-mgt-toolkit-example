import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent
  });
  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'mgt-jest-test'`, () => {
    expect(spectator.component.title).toEqual('mgt-jest-test');
  });

  it('should render title', () => {
    const compiled = spectator.fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mgt-jest-test app is running!');
  });
});
