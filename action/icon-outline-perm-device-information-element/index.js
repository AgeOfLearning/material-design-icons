import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermDeviceInformationElement
 * @class IconOutlinePermDeviceInformationElement
 * @extends {AoflElement}
 */
class IconOutlinePermDeviceInformationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermDeviceInformationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-device-information';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermDeviceInformationElement.is, IconOutlinePermDeviceInformationElement);

export default IconOutlinePermDeviceInformationElement;
