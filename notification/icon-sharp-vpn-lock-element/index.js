import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVpnLockElement
 * @class IconSharpVpnLockElement
 * @extends {AoflElement}
 */
class IconSharpVpnLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVpnLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vpn-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVpnLockElement.is, IconSharpVpnLockElement);

export default IconSharpVpnLockElement;
