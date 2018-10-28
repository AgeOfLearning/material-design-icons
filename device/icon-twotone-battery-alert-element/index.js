import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryAlertElement
 * @class IconTwotoneBatteryAlertElement
 * @extends {AoflElement}
 */
class IconTwotoneBatteryAlertElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryAlertElement.is, IconTwotoneBatteryAlertElement);

export default IconTwotoneBatteryAlertElement;
