import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVpnLockElement
 * @class IconRoundVpnLockElement
 * @extends {AoflElement}
 */
class IconRoundVpnLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVpnLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vpn-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVpnLockElement.is, IconRoundVpnLockElement);

export default IconRoundVpnLockElement;
