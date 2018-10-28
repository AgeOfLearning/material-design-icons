import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoAlbumElement
 * @class IconOutlinePhotoAlbumElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoAlbumElement.is, IconOutlinePhotoAlbumElement);

export default IconOutlinePhotoAlbumElement;
