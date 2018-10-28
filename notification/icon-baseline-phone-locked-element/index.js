import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneLockedElement
 * @class IconBaselinePhoneLockedElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneLockedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneLockedElement.is, IconBaselinePhoneLockedElement);

export default IconBaselinePhoneLockedElement;
