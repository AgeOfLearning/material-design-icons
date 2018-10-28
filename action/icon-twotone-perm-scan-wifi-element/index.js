import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermScanWifiElement
 * @class IconTwotonePermScanWifiElement
 * @extends {AoflElement}
 */
class IconTwotonePermScanWifiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermScanWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-scan-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermScanWifiElement.is, IconTwotonePermScanWifiElement);

export default IconTwotonePermScanWifiElement;
