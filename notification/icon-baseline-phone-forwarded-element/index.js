import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneForwardedElement
 * @class IconBaselinePhoneForwardedElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneForwardedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneForwardedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-forwarded';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneForwardedElement.is, IconBaselinePhoneForwardedElement);

export default IconBaselinePhoneForwardedElement;
