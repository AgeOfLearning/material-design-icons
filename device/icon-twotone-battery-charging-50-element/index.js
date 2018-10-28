import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryCharging50Element
 * @class IconTwotoneBatteryCharging50Element
 * @extends {AoflElement}
 */
class IconTwotoneBatteryCharging50Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryCharging50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-charging-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryCharging50Element.is, IconTwotoneBatteryCharging50Element);

export default IconTwotoneBatteryCharging50Element;
