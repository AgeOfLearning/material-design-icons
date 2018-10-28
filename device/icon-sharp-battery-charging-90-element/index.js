import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging90Element
 * @class IconSharpBatteryCharging90Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging90Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging90Element.is, IconSharpBatteryCharging90Element);

export default IconSharpBatteryCharging90Element;
