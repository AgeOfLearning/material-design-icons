import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoSizeSelectSmallElement
 * @class IconOutlinePhotoSizeSelectSmallElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoSizeSelectSmallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoSizeSelectSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-size-select-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoSizeSelectSmallElement.is, IconOutlinePhotoSizeSelectSmallElement);

export default IconOutlinePhotoSizeSelectSmallElement;
