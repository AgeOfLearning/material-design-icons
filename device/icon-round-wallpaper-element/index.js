import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWallpaperElement
 * @class IconRoundWallpaperElement
 * @extends {AoflElement}
 */
class IconRoundWallpaperElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWallpaperElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wallpaper';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWallpaperElement.is, IconRoundWallpaperElement);

export default IconRoundWallpaperElement;
