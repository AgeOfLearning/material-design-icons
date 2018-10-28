import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoSizeSelectLargeElement
 * @class IconOutlinePhotoSizeSelectLargeElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoSizeSelectLargeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoSizeSelectLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-size-select-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoSizeSelectLargeElement.is, IconOutlinePhotoSizeSelectLargeElement);

export default IconOutlinePhotoSizeSelectLargeElement;
