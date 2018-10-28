import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging60Element
 * @class IconRoundBatteryCharging60Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging60Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging60Element.is, IconRoundBatteryCharging60Element);

export default IconRoundBatteryCharging60Element;
