import { WebAgileReleaseSuitePage } from './app.po';

describe('web-agile-release-suite App', () => {
  let page: WebAgileReleaseSuitePage;

  beforeEach(() => {
    page = new WebAgileReleaseSuitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
