import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryChargingFullElement
 * @class IconOutlineBatteryChargingFullElement
 * @extends {AoflElement}
 */
class IconOutlineBatteryChargingFullElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryChargingFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryChargingFullElement.is, IconOutlineBatteryChargingFullElement);

export default IconOutlineBatteryChargingFullElement;
