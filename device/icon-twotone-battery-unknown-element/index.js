import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryUnknownElement
 * @class IconTwotoneBatteryUnknownElement
 * @extends {AoflElement}
 */
class IconTwotoneBatteryUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryUnknownElement.is, IconTwotoneBatteryUnknownElement);

export default IconTwotoneBatteryUnknownElement;
