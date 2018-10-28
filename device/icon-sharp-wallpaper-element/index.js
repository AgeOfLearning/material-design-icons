import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWallpaperElement
 * @class IconSharpWallpaperElement
 * @extends {AoflElement}
 */
class IconSharpWallpaperElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWallpaperElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wallpaper';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWallpaperElement.is, IconSharpWallpaperElement);

export default IconSharpWallpaperElement;
