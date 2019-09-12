import './tile-styles';

export class GridElement extends HTMLElement {}
customElements.define('bghoard-grid', GridElement);
export class TileElement extends HTMLElement {}
customElements.define('bghoard-tile', TileElement);
export class TileTitleElement extends HTMLElement {}
customElements.define('bghoard-tile-title', TileTitleElement);
export class TileLeftCornerElement extends HTMLElement {}
customElements.define('bghoard-tile-left-corner', TileLeftCornerElement);
export class TileRightCornerElement extends HTMLElement {}
customElements.define('bghoard-tile-right-corner', TileRightCornerElement);
export class ImageWrapperElement extends HTMLElement {}
customElements.define('bghoard-image-wrapper', ImageWrapperElement);

// Helper to add JSX types in *.tsx files
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<
  Omit<T, 'children'> & { children?: any[] | any }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bghoard-grid': JSXify<GridElement>;
      'bghoard-tile': JSXify<TileElement>;
      'bghoard-tile-title': JSXify<TileTitleElement>;
      'bghoard-tile-left-corner': JSXify<TileLeftCornerElement>;
      'bghoard-tile-right-corner': JSXify<TileRightCornerElement>;
      'bghoard-image-wrapper': JSXify<ImageWrapperElement>;
    }
  }
}
