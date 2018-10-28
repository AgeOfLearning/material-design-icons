import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneCallbackElement
 * @class IconBaselinePhoneCallbackElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneCallbackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneCallbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-callback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneCallbackElement.is, IconBaselinePhoneCallbackElement);

export default IconBaselinePhoneCallbackElement;
