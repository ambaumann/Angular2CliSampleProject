import { SDMToolKitWebPage } from './app.po';

describe('sdmtool-kit-web App', function() {
  let page: SDMToolKitWebPage;

  beforeEach(() => {
    page = new SDMToolKitWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
