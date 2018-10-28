import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging90Element
 * @class IconRoundBatteryCharging90Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging90Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging90Element.is, IconRoundBatteryCharging90Element);

export default IconRoundBatteryCharging90Element;
