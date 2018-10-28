import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifiOffElement
 * @class IconRoundSignalWifiOffElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifiOffElement.is, IconRoundSignalWifiOffElement);

export default IconRoundSignalWifiOffElement;
