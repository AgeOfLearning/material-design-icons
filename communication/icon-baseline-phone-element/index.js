import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneElement
 * @class IconBaselinePhoneElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneElement.is, IconBaselinePhoneElement);

export default IconBaselinePhoneElement;
