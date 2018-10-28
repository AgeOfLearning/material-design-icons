import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVpnLockElement
 * @class IconBaselineVpnLockElement
 * @extends {AoflElement}
 */
class IconBaselineVpnLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVpnLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vpn-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVpnLockElement.is, IconBaselineVpnLockElement);

export default IconBaselineVpnLockElement;
