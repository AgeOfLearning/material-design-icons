import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging20Element
 * @class IconRoundBatteryCharging20Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging20Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging20Element.is, IconRoundBatteryCharging20Element);

export default IconRoundBatteryCharging20Element;
