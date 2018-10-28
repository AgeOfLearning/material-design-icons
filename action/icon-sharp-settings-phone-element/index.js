import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsPhoneElement
 * @class IconSharpSettingsPhoneElement
 * @extends {AoflElement}
 */
class IconSharpSettingsPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsPhoneElement.is, IconSharpSettingsPhoneElement);

export default IconSharpSettingsPhoneElement;
