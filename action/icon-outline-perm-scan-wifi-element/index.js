import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermScanWifiElement
 * @class IconOutlinePermScanWifiElement
 * @extends {AoflElement}
 */
class IconOutlinePermScanWifiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermScanWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-scan-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermScanWifiElement.is, IconOutlinePermScanWifiElement);

export default IconOutlinePermScanWifiElement;
