import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging30Element
 * @class IconRoundBatteryCharging30Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging30Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging30Element.is, IconRoundBatteryCharging30Element);

export default IconRoundBatteryCharging30Element;
