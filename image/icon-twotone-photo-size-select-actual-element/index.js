import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoSizeSelectActualElement
 * @class IconTwotonePhotoSizeSelectActualElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoSizeSelectActualElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoSizeSelectActualElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-size-select-actual';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoSizeSelectActualElement.is, IconTwotonePhotoSizeSelectActualElement);

export default IconTwotonePhotoSizeSelectActualElement;
