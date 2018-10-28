import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoSizeSelectActualElement
 * @class IconOutlinePhotoSizeSelectActualElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoSizeSelectActualElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoSizeSelectActualElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-size-select-actual';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoSizeSelectActualElement.is, IconOutlinePhotoSizeSelectActualElement);

export default IconOutlinePhotoSizeSelectActualElement;
