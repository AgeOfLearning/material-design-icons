import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryUnknownElement
 * @class IconBaselineBatteryUnknownElement
 * @extends {AoflElement}
 */
class IconBaselineBatteryUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryUnknownElement.is, IconBaselineBatteryUnknownElement);

export default IconBaselineBatteryUnknownElement;
