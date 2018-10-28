import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoSizeSelectSmallElement
 * @class IconBaselinePhotoSizeSelectSmallElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoSizeSelectSmallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoSizeSelectSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-size-select-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoSizeSelectSmallElement.is, IconBaselinePhotoSizeSelectSmallElement);

export default IconBaselinePhotoSizeSelectSmallElement;
