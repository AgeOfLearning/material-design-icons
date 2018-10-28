import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccountBalanceWalletElement
 * @class IconTwotoneAccountBalanceWalletElement
 * @extends {AoflElement}
 */
class IconTwotoneAccountBalanceWalletElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccountBalanceWalletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-account-balance-wallet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccountBalanceWalletElement.is, IconTwotoneAccountBalanceWalletElement);

export default IconTwotoneAccountBalanceWalletElement;
