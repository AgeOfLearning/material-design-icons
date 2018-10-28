import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging20Element
 * @class IconBaselineBatteryCharging20Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging20Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging20Element.is, IconBaselineBatteryCharging20Element);

export default IconBaselineBatteryCharging20Element;
