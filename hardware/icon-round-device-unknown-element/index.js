import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeviceUnknownElement
 * @class IconRoundDeviceUnknownElement
 * @extends {AoflElement}
 */
class IconRoundDeviceUnknownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeviceUnknownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-device-unknown';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeviceUnknownElement.is, IconRoundDeviceUnknownElement);

export default IconRoundDeviceUnknownElement;
