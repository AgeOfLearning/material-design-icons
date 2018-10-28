import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccountBalanceWalletElement
 * @class IconOutlineAccountBalanceWalletElement
 * @extends {AoflElement}
 */
class IconOutlineAccountBalanceWalletElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccountBalanceWalletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-account-balance-wallet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccountBalanceWalletElement.is, IconOutlineAccountBalanceWalletElement);

export default IconOutlineAccountBalanceWalletElement;
