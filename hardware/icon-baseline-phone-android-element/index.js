import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneAndroidElement
 * @class IconBaselinePhoneAndroidElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneAndroidElement.is, IconBaselinePhoneAndroidElement);

export default IconBaselinePhoneAndroidElement;
