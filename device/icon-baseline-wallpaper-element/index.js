import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWallpaperElement
 * @class IconBaselineWallpaperElement
 * @extends {AoflElement}
 */
class IconBaselineWallpaperElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWallpaperElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wallpaper';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWallpaperElement.is, IconBaselineWallpaperElement);

export default IconBaselineWallpaperElement;
