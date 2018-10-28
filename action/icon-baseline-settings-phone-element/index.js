import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsPhoneElement
 * @class IconBaselineSettingsPhoneElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsPhoneElement.is, IconBaselineSettingsPhoneElement);

export default IconBaselineSettingsPhoneElement;
