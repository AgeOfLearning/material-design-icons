import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWallpaperElement
 * @class IconTwotoneWallpaperElement
 * @extends {AoflElement}
 */
class IconTwotoneWallpaperElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWallpaperElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wallpaper';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWallpaperElement.is, IconTwotoneWallpaperElement);

export default IconTwotoneWallpaperElement;
