declare module "*.css" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare module "*.less" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: object;
  export default content;
}

// 给window上扩展属性
declare interface Window {
  APP: any;
  __state__: any;
}

interface CommonElement {
  styleName?: string;
  [propName: string]: any;
}

interface System {
  import<T = any>(module: string): Promise<T>
}

declare const System: System

declare module 'react-async-component';
