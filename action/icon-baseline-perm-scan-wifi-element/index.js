import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermScanWifiElement
 * @class IconBaselinePermScanWifiElement
 * @extends {AoflElement}
 */
class IconBaselinePermScanWifiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermScanWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-scan-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermScanWifiElement.is, IconBaselinePermScanWifiElement);

export default IconBaselinePermScanWifiElement;
