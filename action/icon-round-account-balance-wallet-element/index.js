import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccountBalanceWalletElement
 * @class IconRoundAccountBalanceWalletElement
 * @extends {AoflElement}
 */
class IconRoundAccountBalanceWalletElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccountBalanceWalletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-account-balance-wallet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccountBalanceWalletElement.is, IconRoundAccountBalanceWalletElement);

export default IconRoundAccountBalanceWalletElement;
