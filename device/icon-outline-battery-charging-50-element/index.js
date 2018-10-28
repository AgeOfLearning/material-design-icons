import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryCharging50Element
 * @class IconOutlineBatteryCharging50Element
 * @extends {AoflElement}
 */
class IconOutlineBatteryCharging50Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryCharging50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-charging-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryCharging50Element.is, IconOutlineBatteryCharging50Element);

export default IconOutlineBatteryCharging50Element;
