import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging30Element
 * @class IconOutlineBatteryCharging30Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging30Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging30Element.is, IconOutlineBatteryCharging30Element);

export default IconOutlineBatteryCharging30Element;
