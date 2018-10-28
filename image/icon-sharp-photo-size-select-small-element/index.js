import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoSizeSelectSmallElement
 * @class IconSharpPhotoSizeSelectSmallElement
 * @extends {AoflElement}
 */
class IconSharpPhotoSizeSelectSmallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoSizeSelectSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-size-select-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoSizeSelectSmallElement.is, IconSharpPhotoSizeSelectSmallElement);

export default IconSharpPhotoSizeSelectSmallElement;
