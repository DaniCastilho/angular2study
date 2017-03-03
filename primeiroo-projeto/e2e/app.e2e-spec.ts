import { PrimeirooProjetoPage } from './app.po';

describe('primeiroo-projeto App', () => {
  let page: PrimeirooProjetoPage;

  beforeEach(() => {
    page = new PrimeirooProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
