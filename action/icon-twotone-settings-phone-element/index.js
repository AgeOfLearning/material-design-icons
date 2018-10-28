import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsPhoneElement
 * @class IconTwotoneSettingsPhoneElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsPhoneElement.is, IconTwotoneSettingsPhoneElement);

export default IconTwotoneSettingsPhoneElement;
