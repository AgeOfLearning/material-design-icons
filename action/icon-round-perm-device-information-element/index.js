import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermDeviceInformationElement
 * @class IconRoundPermDeviceInformationElement
 * @extends {AoflElement}
 */
class IconRoundPermDeviceInformationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermDeviceInformationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-device-information';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermDeviceInformationElement.is, IconRoundPermDeviceInformationElement);

export default IconRoundPermDeviceInformationElement;
