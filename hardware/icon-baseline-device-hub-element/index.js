import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeviceHubElement
 * @class IconBaselineDeviceHubElement
 * @extends {AoflElement}
 */
class IconBaselineDeviceHubElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeviceHubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-device-hub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeviceHubElement.is, IconBaselineDeviceHubElement);

export default IconBaselineDeviceHubElement;
