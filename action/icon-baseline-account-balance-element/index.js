import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccountBalanceElement
 * @class IconBaselineAccountBalanceElement
 * @extends {AoflElement}
 */
class IconBaselineAccountBalanceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccountBalanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-account-balance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccountBalanceElement.is, IconBaselineAccountBalanceElement);

export default IconBaselineAccountBalanceElement;
