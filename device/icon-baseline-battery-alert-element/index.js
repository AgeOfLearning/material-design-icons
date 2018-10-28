import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryAlertElement
 * @class IconBaselineBatteryAlertElement
 * @extends {AoflElement}
 */
class IconBaselineBatteryAlertElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryAlertElement.is, IconBaselineBatteryAlertElement);

export default IconBaselineBatteryAlertElement;
