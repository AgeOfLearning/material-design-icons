import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging30Element
 * @class IconBaselineBatteryCharging30Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging30Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging30Element.is, IconBaselineBatteryCharging30Element);

export default IconBaselineBatteryCharging30Element;
