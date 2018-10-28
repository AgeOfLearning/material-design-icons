import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoSizeSelectSmallElement
 * @class IconTwotonePhotoSizeSelectSmallElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoSizeSelectSmallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoSizeSelectSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-size-select-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoSizeSelectSmallElement.is, IconTwotonePhotoSizeSelectSmallElement);

export default IconTwotonePhotoSizeSelectSmallElement;
