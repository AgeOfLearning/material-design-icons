import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsPhoneElement
 * @class IconRoundSettingsPhoneElement
 * @extends {AoflElement}
 */
class IconRoundSettingsPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsPhoneElement.is, IconRoundSettingsPhoneElement);

export default IconRoundSettingsPhoneElement;
