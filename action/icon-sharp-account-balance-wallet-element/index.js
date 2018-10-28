import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccountBalanceWalletElement
 * @class IconSharpAccountBalanceWalletElement
 * @extends {AoflElement}
 */
class IconSharpAccountBalanceWalletElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccountBalanceWalletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-account-balance-wallet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccountBalanceWalletElement.is, IconSharpAccountBalanceWalletElement);

export default IconSharpAccountBalanceWalletElement;
