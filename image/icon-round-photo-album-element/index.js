import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoAlbumElement
 * @class IconRoundPhotoAlbumElement
 * @extends {AoflElement}
 */
class IconRoundPhotoAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoAlbumElement.is, IconRoundPhotoAlbumElement);

export default IconRoundPhotoAlbumElement;
