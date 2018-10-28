import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging80Element
 * @class IconOutlineBatteryCharging80Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging80Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging80Element.is, IconOutlineBatteryCharging80Element);

export default IconOutlineBatteryCharging80Element;
