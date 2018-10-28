import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging60Element
 * @class IconOutlineBatteryCharging60Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging60Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging60Element.is, IconOutlineBatteryCharging60Element);

export default IconOutlineBatteryCharging60Element;
