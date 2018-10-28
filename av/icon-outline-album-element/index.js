import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlbumElement
 * @class IconOutlineAlbumElement
 * @extends {AoflElement}
 */
class IconOutlineAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlbumElement.is, IconOutlineAlbumElement);

export default IconOutlineAlbumElement;
