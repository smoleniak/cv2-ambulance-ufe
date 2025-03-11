import { newSpecPage } from '@stencil/core/testing';
import { SsAmbulanceWlApp } from '../ss-ambulance-wl-app';

describe('ss-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [SsAmbulanceWlApp],
      html: `<ss-ambulance-wl-app base-path="/"></ss-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ss-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [SsAmbulanceWlApp],
      html: `<ss-ambulance-wl-app base-path="/ambulance-wl/"></ss-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ss-ambulance-wl-list");
  });
});