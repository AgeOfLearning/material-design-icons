import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsBluetoothElement
 * @class IconRoundSettingsBluetoothElement
 * @extends {AoflElement}
 */
class IconRoundSettingsBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsBluetoothElement.is, IconRoundSettingsBluetoothElement);

export default IconRoundSettingsBluetoothElement;
