import { newE2EPage } from '@stencil/core/testing';

describe('ss-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ss-ambulance-wl-list></ss-ambulance-wl-list>');

    const element = await page.find('ss-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
