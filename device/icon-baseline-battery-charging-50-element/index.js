import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryCharging50Element
 * @class IconBaselineBatteryCharging50Element
 * @extends {AoflElement}
 */
class IconBaselineBatteryCharging50Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryCharging50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-charging-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryCharging50Element.is, IconBaselineBatteryCharging50Element);

export default IconBaselineBatteryCharging50Element;
