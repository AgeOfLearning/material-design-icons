import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermDeviceInformationElement
 * @class IconBaselinePermDeviceInformationElement
 * @extends {AoflElement}
 */
class IconBaselinePermDeviceInformationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermDeviceInformationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-device-information';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermDeviceInformationElement.is, IconBaselinePermDeviceInformationElement);

export default IconBaselinePermDeviceInformationElement;
