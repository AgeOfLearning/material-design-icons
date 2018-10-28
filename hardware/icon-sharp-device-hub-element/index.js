import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeviceHubElement
 * @class IconSharpDeviceHubElement
 * @extends {AoflElement}
 */
class IconSharpDeviceHubElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeviceHubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-device-hub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeviceHubElement.is, IconSharpDeviceHubElement);

export default IconSharpDeviceHubElement;
