import { VictoryGardenRanchSitePage } from './app.po';

describe('victory-garden-ranch-site App', function() {
  let page: VictoryGardenRanchSitePage;

  beforeEach(() => {
    page = new VictoryGardenRanchSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
