import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging60Element
 * @class IconBaselineBatteryCharging60Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging60Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging60Element.is, IconBaselineBatteryCharging60Element);

export default IconBaselineBatteryCharging60Element;
