import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging80Element
 * @class IconTwotoneBatteryCharging80Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging80Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging80Element.is, IconTwotoneBatteryCharging80Element);

export default IconTwotoneBatteryCharging80Element;
