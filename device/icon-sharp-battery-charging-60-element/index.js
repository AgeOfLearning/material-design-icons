import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging60Element
 * @class IconSharpBatteryCharging60Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging60Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging60Element.is, IconSharpBatteryCharging60Element);

export default IconSharpBatteryCharging60Element;
