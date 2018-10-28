import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging90Element
 * @class IconBaselineBatteryCharging90Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging90Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging90Element.is, IconBaselineBatteryCharging90Element);

export default IconBaselineBatteryCharging90Element;
