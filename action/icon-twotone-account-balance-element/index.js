import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccountBalanceElement
 * @class IconTwotoneAccountBalanceElement
 * @extends {AoflElement}
 */
class IconTwotoneAccountBalanceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccountBalanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-account-balance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccountBalanceElement.is, IconTwotoneAccountBalanceElement);

export default IconTwotoneAccountBalanceElement;
