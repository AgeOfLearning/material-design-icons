import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNetworkWifiElement
 * @class IconBaselineNetworkWifiElement
 * @extends {AoflElement}
 */
class IconBaselineNetworkWifiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNetworkWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-network-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNetworkWifiElement.is, IconBaselineNetworkWifiElement);

export default IconBaselineNetworkWifiElement;
