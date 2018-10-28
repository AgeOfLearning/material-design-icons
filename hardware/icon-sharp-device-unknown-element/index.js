import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeviceUnknownElement
 * @class IconSharpDeviceUnknownElement
 * @extends {AoflElement}
 */
class IconSharpDeviceUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeviceUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-device-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeviceUnknownElement.is, IconSharpDeviceUnknownElement);

export default IconSharpDeviceUnknownElement;
