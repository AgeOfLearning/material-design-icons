import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNetworkWifiElement
 * @class IconOutlineNetworkWifiElement
 * @extends {AoflElement}
 */
class IconOutlineNetworkWifiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNetworkWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-network-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNetworkWifiElement.is, IconOutlineNetworkWifiElement);

export default IconOutlineNetworkWifiElement;
