import { DevPage } from './app.po';

describe('dev App', () => {
  let page: DevPage;

  beforeEach(() => {
    page = new DevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
