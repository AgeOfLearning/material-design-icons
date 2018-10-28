import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccountBalanceElement
 * @class IconOutlineAccountBalanceElement
 * @extends {AoflElement}
 */
class IconOutlineAccountBalanceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccountBalanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-account-balance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccountBalanceElement.is, IconOutlineAccountBalanceElement);

export default IconOutlineAccountBalanceElement;
