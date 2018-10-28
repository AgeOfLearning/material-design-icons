import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoAlbumElement
 * @class IconSharpPhotoAlbumElement
 * @extends {AoflElement}
 */
class IconSharpPhotoAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoAlbumElement.is, IconSharpPhotoAlbumElement);

export default IconSharpPhotoAlbumElement;
