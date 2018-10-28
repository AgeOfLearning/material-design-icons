import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging80Element
 * @class IconRoundBatteryCharging80Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging80Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging80Element.is, IconRoundBatteryCharging80Element);

export default IconRoundBatteryCharging80Element;
