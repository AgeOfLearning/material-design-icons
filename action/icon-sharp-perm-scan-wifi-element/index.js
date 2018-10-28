import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermScanWifiElement
 * @class IconSharpPermScanWifiElement
 * @extends {AoflElement}
 */
class IconSharpPermScanWifiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermScanWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-scan-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermScanWifiElement.is, IconSharpPermScanWifiElement);

export default IconSharpPermScanWifiElement;
