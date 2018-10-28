import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging30Element
 * @class IconTwotoneBatteryCharging30Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging30Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging30Element.is, IconTwotoneBatteryCharging30Element);

export default IconTwotoneBatteryCharging30Element;
