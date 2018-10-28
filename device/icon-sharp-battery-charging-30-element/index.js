import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging30Element
 * @class IconSharpBatteryCharging30Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging30Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging30Element.is, IconSharpBatteryCharging30Element);

export default IconSharpBatteryCharging30Element;
