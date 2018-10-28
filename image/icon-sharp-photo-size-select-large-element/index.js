import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoSizeSelectLargeElement
 * @class IconSharpPhotoSizeSelectLargeElement
 * @extends {AoflElement}
 */
class IconSharpPhotoSizeSelectLargeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoSizeSelectLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-size-select-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoSizeSelectLargeElement.is, IconSharpPhotoSizeSelectLargeElement);

export default IconSharpPhotoSizeSelectLargeElement;
