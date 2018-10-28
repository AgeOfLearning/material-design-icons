import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging90Element
 * @class IconTwotoneBatteryCharging90Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging90Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging90Element.is, IconTwotoneBatteryCharging90Element);

export default IconTwotoneBatteryCharging90Element;
