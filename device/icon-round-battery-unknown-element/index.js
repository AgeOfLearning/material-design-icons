import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryUnknownElement
 * @class IconRoundBatteryUnknownElement
 * @extends {AoflElement}
 */
class IconRoundBatteryUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryUnknownElement.is, IconRoundBatteryUnknownElement);

export default IconRoundBatteryUnknownElement;
