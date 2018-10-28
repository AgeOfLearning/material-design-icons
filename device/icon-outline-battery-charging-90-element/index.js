import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging90Element
 * @class IconOutlineBatteryCharging90Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging90Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging90Element.is, IconOutlineBatteryCharging90Element);

export default IconOutlineBatteryCharging90Element;
