import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeviceUnknownElement
 * @class IconOutlineDeviceUnknownElement
 * @extends {AoflElement}
 */
class IconOutlineDeviceUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeviceUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-device-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeviceUnknownElement.is, IconOutlineDeviceUnknownElement);

export default IconOutlineDeviceUnknownElement;
