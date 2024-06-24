declare module 'nprogress';

declare module '*.svg?component' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}

declare module '*.webp' {
  const value: any;
  export = value;
}

declare module 'china-area-data';

declare namespace JSX {
  interface Element extends VNode {}
  interface ElementClass extends Vue {}
  interface ElementAttributesProperty {
    $props: any;
  }
  interface IntrinsicElements {
    [elem: string]: any;
    MyComponent: any;
  }
  interface IntrinsicAttributes {
    [elem: string]: any;
  }
}
