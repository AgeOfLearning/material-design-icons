import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoAlbumElement
 * @class IconTwotonePhotoAlbumElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoAlbumElement.is, IconTwotonePhotoAlbumElement);

export default IconTwotonePhotoAlbumElement;
