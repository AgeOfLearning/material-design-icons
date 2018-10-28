import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoLibraryElement
 * @class IconOutlinePhotoLibraryElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoLibraryElement.is, IconOutlinePhotoLibraryElement);

export default IconOutlinePhotoLibraryElement;
