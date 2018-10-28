import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging80Element
 * @class IconSharpBatteryCharging80Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging80Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging80Element.is, IconSharpBatteryCharging80Element);

export default IconSharpBatteryCharging80Element;
