import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoSizeSelectLargeElement
 * @class IconTwotonePhotoSizeSelectLargeElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoSizeSelectLargeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoSizeSelectLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-size-select-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoSizeSelectLargeElement.is, IconTwotonePhotoSizeSelectLargeElement);

export default IconTwotonePhotoSizeSelectLargeElement;
