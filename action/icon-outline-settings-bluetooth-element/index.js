import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsBluetoothElement
 * @class IconOutlineSettingsBluetoothElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsBluetoothElement.is, IconOutlineSettingsBluetoothElement);

export default IconOutlineSettingsBluetoothElement;
