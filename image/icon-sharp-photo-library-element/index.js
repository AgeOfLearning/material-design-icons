import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoLibraryElement
 * @class IconSharpPhotoLibraryElement
 * @extends {AoflElement}
 */
class IconSharpPhotoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoLibraryElement.is, IconSharpPhotoLibraryElement);

export default IconSharpPhotoLibraryElement;
