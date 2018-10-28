import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryChargingFullElement
 * @class IconTwotoneBatteryChargingFullElement
 * @extends {AoflElement}
 */
class IconTwotoneBatteryChargingFullElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryChargingFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryChargingFullElement.is, IconTwotoneBatteryChargingFullElement);

export default IconTwotoneBatteryChargingFullElement;
