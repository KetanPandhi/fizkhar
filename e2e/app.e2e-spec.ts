import { FizkharPage } from './app.po';

describe('fizkhar App', () => {
  let page: FizkharPage;

  beforeEach(() => {
    page = new FizkharPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
