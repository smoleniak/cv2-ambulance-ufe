/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SsAmbulanceWlList {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSsAmbulanceWlListElement extends Components.SsAmbulanceWlList, HTMLStencilElement {
    }
    var HTMLSsAmbulanceWlListElement: {
        prototype: HTMLSsAmbulanceWlListElement;
        new (): HTMLSsAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ss-ambulance-wl-list": HTMLSsAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SsAmbulanceWlList {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ss-ambulance-wl-list": SsAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ss-ambulance-wl-list": LocalJSX.SsAmbulanceWlList & JSXBase.HTMLAttributes<HTMLSsAmbulanceWlListElement>;
        }
    }
}
