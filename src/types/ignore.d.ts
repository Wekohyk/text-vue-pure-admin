declare module 'nprogress';

declare namespace JSX {
  interface IntrinsicElements {
    MyComponent: any;
  }
}

declare module '*.svg?component' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}

declare module '*.webp' {
  const value: any;
  export = value;
}
