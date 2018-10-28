import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryUnknownElement
 * @class IconOutlineBatteryUnknownElement
 * @extends {AoflElement}
 */
class IconOutlineBatteryUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryUnknownElement.is, IconOutlineBatteryUnknownElement);

export default IconOutlineBatteryUnknownElement;
