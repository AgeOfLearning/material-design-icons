import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsPhoneElement
 * @class IconOutlineSettingsPhoneElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsPhoneElement.is, IconOutlineSettingsPhoneElement);

export default IconOutlineSettingsPhoneElement;
