import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoLibraryElement
 * @class IconTwotonePhotoLibraryElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoLibraryElement.is, IconTwotonePhotoLibraryElement);

export default IconTwotonePhotoLibraryElement;
