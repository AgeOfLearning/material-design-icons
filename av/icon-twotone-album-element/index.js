import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlbumElement
 * @class IconTwotoneAlbumElement
 * @extends {AoflElement}
 */
class IconTwotoneAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlbumElement.is, IconTwotoneAlbumElement);

export default IconTwotoneAlbumElement;
