import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoAlbumElement
 * @class IconBaselinePhotoAlbumElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoAlbumElement.is, IconBaselinePhotoAlbumElement);

export default IconBaselinePhotoAlbumElement;
