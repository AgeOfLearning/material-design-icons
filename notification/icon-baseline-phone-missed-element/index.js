import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneMissedElement
 * @class IconBaselinePhoneMissedElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneMissedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneMissedElement.is, IconBaselinePhoneMissedElement);

export default IconBaselinePhoneMissedElement;
