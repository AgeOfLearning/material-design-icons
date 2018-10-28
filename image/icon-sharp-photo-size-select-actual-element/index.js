import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoSizeSelectActualElement
 * @class IconSharpPhotoSizeSelectActualElement
 * @extends {AoflElement}
 */
class IconSharpPhotoSizeSelectActualElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoSizeSelectActualElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-size-select-actual';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoSizeSelectActualElement.is, IconSharpPhotoSizeSelectActualElement);

export default IconSharpPhotoSizeSelectActualElement;
