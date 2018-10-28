import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoSizeSelectActualElement
 * @class IconBaselinePhotoSizeSelectActualElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoSizeSelectActualElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoSizeSelectActualElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-size-select-actual';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoSizeSelectActualElement.is, IconBaselinePhotoSizeSelectActualElement);

export default IconBaselinePhotoSizeSelectActualElement;
