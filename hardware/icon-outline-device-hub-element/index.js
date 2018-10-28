import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeviceHubElement
 * @class IconOutlineDeviceHubElement
 * @extends {AoflElement}
 */
class IconOutlineDeviceHubElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeviceHubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-device-hub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeviceHubElement.is, IconOutlineDeviceHubElement);

export default IconOutlineDeviceHubElement;
