import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccountBalanceElement
 * @class IconRoundAccountBalanceElement
 * @extends {AoflElement}
 */
class IconRoundAccountBalanceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccountBalanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-account-balance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccountBalanceElement.is, IconRoundAccountBalanceElement);

export default IconRoundAccountBalanceElement;
