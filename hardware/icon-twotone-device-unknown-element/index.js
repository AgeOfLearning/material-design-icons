import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeviceUnknownElement
 * @class IconTwotoneDeviceUnknownElement
 * @extends {AoflElement}
 */
class IconTwotoneDeviceUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeviceUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-device-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeviceUnknownElement.is, IconTwotoneDeviceUnknownElement);

export default IconTwotoneDeviceUnknownElement;
