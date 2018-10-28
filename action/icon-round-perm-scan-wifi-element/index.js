import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermScanWifiElement
 * @class IconRoundPermScanWifiElement
 * @extends {AoflElement}
 */
class IconRoundPermScanWifiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermScanWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-scan-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermScanWifiElement.is, IconRoundPermScanWifiElement);

export default IconRoundPermScanWifiElement;
