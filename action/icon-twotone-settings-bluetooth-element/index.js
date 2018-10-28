import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsBluetoothElement
 * @class IconTwotoneSettingsBluetoothElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsBluetoothElement.is, IconTwotoneSettingsBluetoothElement);

export default IconTwotoneSettingsBluetoothElement;
