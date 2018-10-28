import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryAlertElement
 * @class IconOutlineBatteryAlertElement
 * @extends {AoflElement}
 */
class IconOutlineBatteryAlertElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryAlertElement.is, IconOutlineBatteryAlertElement);

export default IconOutlineBatteryAlertElement;
