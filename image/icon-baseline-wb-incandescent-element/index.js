import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWbIncandescentElement
 * @class IconBaselineWbIncandescentElement
 * @extends {AoflElement}
 */
class IconBaselineWbIncandescentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWbIncandescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wb-incandescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWbIncandescentElement.is, IconBaselineWbIncandescentElement);

export default IconBaselineWbIncandescentElement;
