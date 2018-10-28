import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryChargingFullElement
 * @class IconRoundBatteryChargingFullElement
 * @extends {AoflElement}
 */
class IconRoundBatteryChargingFullElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryChargingFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryChargingFullElement.is, IconRoundBatteryChargingFullElement);

export default IconRoundBatteryChargingFullElement;
