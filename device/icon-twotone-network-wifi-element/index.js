import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNetworkWifiElement
 * @class IconTwotoneNetworkWifiElement
 * @extends {AoflElement}
 */
class IconTwotoneNetworkWifiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNetworkWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-network-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNetworkWifiElement.is, IconTwotoneNetworkWifiElement);

export default IconTwotoneNetworkWifiElement;
