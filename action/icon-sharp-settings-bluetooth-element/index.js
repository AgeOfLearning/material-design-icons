import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsBluetoothElement
 * @class IconSharpSettingsBluetoothElement
 * @extends {AoflElement}
 */
class IconSharpSettingsBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsBluetoothElement.is, IconSharpSettingsBluetoothElement);

export default IconSharpSettingsBluetoothElement;
