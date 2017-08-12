import { MetHotelsPage } from './app.po';

describe('met-hotels App', () => {
  let page: MetHotelsPage;

  beforeEach(() => {
    page = new MetHotelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
