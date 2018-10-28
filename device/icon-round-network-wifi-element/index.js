import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNetworkWifiElement
 * @class IconRoundNetworkWifiElement
 * @extends {AoflElement}
 */
class IconRoundNetworkWifiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNetworkWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-network-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNetworkWifiElement.is, IconRoundNetworkWifiElement);

export default IconRoundNetworkWifiElement;
