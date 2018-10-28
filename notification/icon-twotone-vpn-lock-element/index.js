import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVpnLockElement
 * @class IconTwotoneVpnLockElement
 * @extends {AoflElement}
 */
class IconTwotoneVpnLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVpnLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vpn-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVpnLockElement.is, IconTwotoneVpnLockElement);

export default IconTwotoneVpnLockElement;
