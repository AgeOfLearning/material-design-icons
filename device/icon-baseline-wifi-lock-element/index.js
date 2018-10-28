import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWifiLockElement
 * @class IconBaselineWifiLockElement
 * @extends {AoflElement}
 */
class IconBaselineWifiLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWifiLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wifi-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWifiLockElement.is, IconBaselineWifiLockElement);

export default IconBaselineWifiLockElement;
