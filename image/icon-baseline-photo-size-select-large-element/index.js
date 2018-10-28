import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoSizeSelectLargeElement
 * @class IconBaselinePhotoSizeSelectLargeElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoSizeSelectLargeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoSizeSelectLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-size-select-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoSizeSelectLargeElement.is, IconBaselinePhotoSizeSelectLargeElement);

export default IconBaselinePhotoSizeSelectLargeElement;
