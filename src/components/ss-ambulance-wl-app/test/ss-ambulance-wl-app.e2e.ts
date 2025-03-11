import { newE2EPage } from '@stencil/core/testing';

describe('ss-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ss-ambulance-wl-app></ss-ambulance-wl-app>');

    const element = await page.find('ss-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
