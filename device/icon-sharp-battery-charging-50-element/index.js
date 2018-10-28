import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryCharging50Element
 * @class IconSharpBatteryCharging50Element
 * @extends {AoflElement}
 */
class IconSharpBatteryCharging50Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryCharging50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-charging-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryCharging50Element.is, IconSharpBatteryCharging50Element);

export default IconSharpBatteryCharging50Element;
