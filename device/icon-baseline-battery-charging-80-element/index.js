import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging80Element
 * @class IconBaselineBatteryCharging80Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging80Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging80Element.is, IconBaselineBatteryCharging80Element);

export default IconBaselineBatteryCharging80Element;
