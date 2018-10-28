import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryAlertElement
 * @class IconSharpBatteryAlertElement
 * @extends {AoflElement}
 */
class IconSharpBatteryAlertElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryAlertElement.is, IconSharpBatteryAlertElement);

export default IconSharpBatteryAlertElement;
