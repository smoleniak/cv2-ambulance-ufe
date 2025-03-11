import { newE2EPage } from '@stencil/core/testing';

describe('ss-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ss-ambulance-wl-editor></ss-ambulance-wl-editor>');

    const element = await page.find('ss-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
