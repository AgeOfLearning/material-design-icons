import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging20Element
 * @class IconOutlineBatteryCharging20Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging20Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging20Element.is, IconOutlineBatteryCharging20Element);

export default IconOutlineBatteryCharging20Element;
