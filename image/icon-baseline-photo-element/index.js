import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoElement
 * @class IconBaselinePhotoElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoElement.is, IconBaselinePhotoElement);

export default IconBaselinePhotoElement;
