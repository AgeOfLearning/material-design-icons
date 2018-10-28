import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryChargingFullElement
 * @class IconSharpBatteryChargingFullElement
 * @extends {AoflElement}
 */
class IconSharpBatteryChargingFullElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryChargingFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryChargingFullElement.is, IconSharpBatteryChargingFullElement);

export default IconSharpBatteryChargingFullElement;
