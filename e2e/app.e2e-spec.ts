import { GenericAngularPage } from './app.po';

describe('generic-angular App', () => {
  let page: GenericAngularPage;

  beforeEach(() => {
    page = new GenericAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
