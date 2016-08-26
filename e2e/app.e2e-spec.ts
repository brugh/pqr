import { PqrPage } from './app.po';

describe('pqr App', function() {
  let page: PqrPage;

  beforeEach(() => {
    page = new PqrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
