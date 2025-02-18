import { newSpecPage } from '@stencil/core/testing';
import { SsAmbulanceWlList } from '../ss-ambulance-wl-list';

describe('ss-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SsAmbulanceWlList],
      html: `<ss-ambulance-wl-list></ss-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ss-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ss-ambulance-wl-list>
    `);
  });
});
