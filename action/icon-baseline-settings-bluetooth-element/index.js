import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsBluetoothElement
 * @class IconBaselineSettingsBluetoothElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsBluetoothElement.is, IconBaselineSettingsBluetoothElement);

export default IconBaselineSettingsBluetoothElement;
