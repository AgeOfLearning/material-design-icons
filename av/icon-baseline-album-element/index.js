import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlbumElement
 * @class IconBaselineAlbumElement
 * @extends {AoflElement}
 */
class IconBaselineAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlbumElement.is, IconBaselineAlbumElement);

export default IconBaselineAlbumElement;
