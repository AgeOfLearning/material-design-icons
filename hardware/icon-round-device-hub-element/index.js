import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeviceHubElement
 * @class IconRoundDeviceHubElement
 * @extends {AoflElement}
 */
class IconRoundDeviceHubElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeviceHubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-device-hub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeviceHubElement.is, IconRoundDeviceHubElement);

export default IconRoundDeviceHubElement;
