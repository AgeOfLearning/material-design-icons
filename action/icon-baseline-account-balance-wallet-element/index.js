import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccountBalanceWalletElement
 * @class IconBaselineAccountBalanceWalletElement
 * @extends {AoflElement}
 */
class IconBaselineAccountBalanceWalletElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccountBalanceWalletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-account-balance-wallet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccountBalanceWalletElement.is, IconBaselineAccountBalanceWalletElement);

export default IconBaselineAccountBalanceWalletElement;
