import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNetworkWifiElement
 * @class IconSharpNetworkWifiElement
 * @extends {AoflElement}
 */
class IconSharpNetworkWifiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNetworkWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-network-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNetworkWifiElement.is, IconSharpNetworkWifiElement);

export default IconSharpNetworkWifiElement;
