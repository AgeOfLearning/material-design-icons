import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryChargingFullElement
 * @class IconBaselineBatteryChargingFullElement
 * @extends {AoflElement}
 */
class IconBaselineBatteryChargingFullElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryChargingFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryChargingFullElement.is, IconBaselineBatteryChargingFullElement);

export default IconBaselineBatteryChargingFullElement;
