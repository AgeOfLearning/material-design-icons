import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging20Element
 * @class IconSharpBatteryCharging20Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging20Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging20Element.is, IconSharpBatteryCharging20Element);

export default IconSharpBatteryCharging20Element;
