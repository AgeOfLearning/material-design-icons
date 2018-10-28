import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermDeviceInformationElement
 * @class IconTwotonePermDeviceInformationElement
 * @extends {AoflElement}
 */
class IconTwotonePermDeviceInformationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermDeviceInformationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-device-information';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermDeviceInformationElement.is, IconTwotonePermDeviceInformationElement);

export default IconTwotonePermDeviceInformationElement;
