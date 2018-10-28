import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeviceUnknownElement
 * @class IconBaselineDeviceUnknownElement
 * @extends {AoflElement}
 */
class IconBaselineDeviceUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeviceUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-device-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeviceUnknownElement.is, IconBaselineDeviceUnknownElement);

export default IconBaselineDeviceUnknownElement;
