import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVpnLockElement
 * @class IconOutlineVpnLockElement
 * @extends {AoflElement}
 */
class IconOutlineVpnLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVpnLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vpn-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVpnLockElement.is, IconOutlineVpnLockElement);

export default IconOutlineVpnLockElement;
