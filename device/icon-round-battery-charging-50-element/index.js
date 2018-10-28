import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryCharging50Element
 * @class IconRoundBatteryCharging50Element
 * @extends {AoflElement}
 */
class IconRoundBatteryCharging50Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryCharging50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-charging-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryCharging50Element.is, IconRoundBatteryCharging50Element);

export default IconRoundBatteryCharging50Element;
