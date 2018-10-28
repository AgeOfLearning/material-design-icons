import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneIphoneElement
 * @class IconBaselinePhoneIphoneElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneIphoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneIphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-iphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneIphoneElement.is, IconBaselinePhoneIphoneElement);

export default IconBaselinePhoneIphoneElement;
