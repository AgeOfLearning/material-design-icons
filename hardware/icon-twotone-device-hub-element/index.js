import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeviceHubElement
 * @class IconTwotoneDeviceHubElement
 * @extends {AoflElement}
 */
class IconTwotoneDeviceHubElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeviceHubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-device-hub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeviceHubElement.is, IconTwotoneDeviceHubElement);

export default IconTwotoneDeviceHubElement;
