import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryUnknownElement
 * @class IconSharpBatteryUnknownElement
 * @extends {AoflElement}
 */
class IconSharpBatteryUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryUnknownElement.is, IconSharpBatteryUnknownElement);

export default IconSharpBatteryUnknownElement;
