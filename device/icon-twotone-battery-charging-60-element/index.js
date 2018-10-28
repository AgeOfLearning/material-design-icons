import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging60Element
 * @class IconTwotoneBatteryCharging60Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging60Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging60Element.is, IconTwotoneBatteryCharging60Element);

export default IconTwotoneBatteryCharging60Element;
