import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryAlertElement
 * @class IconRoundBatteryAlertElement
 * @extends {AoflElement}
 */
class IconRoundBatteryAlertElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryAlertElement.is, IconRoundBatteryAlertElement);

export default IconRoundBatteryAlertElement;
