import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging20Element
 * @class IconTwotoneBatteryCharging20Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging20Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging20Element.is, IconTwotoneBatteryCharging20Element);

export default IconTwotoneBatteryCharging20Element;
