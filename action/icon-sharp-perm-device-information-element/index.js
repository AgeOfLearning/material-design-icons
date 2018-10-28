import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermDeviceInformationElement
 * @class IconSharpPermDeviceInformationElement
 * @extends {AoflElement}
 */
class IconSharpPermDeviceInformationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermDeviceInformationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-device-information';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermDeviceInformationElement.is, IconSharpPermDeviceInformationElement);

export default IconSharpPermDeviceInformationElement;
