import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWallpaperElement
 * @class IconOutlineWallpaperElement
 * @extends {AoflElement}
 */
class IconOutlineWallpaperElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWallpaperElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wallpaper';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWallpaperElement.is, IconOutlineWallpaperElement);

export default IconOutlineWallpaperElement;
