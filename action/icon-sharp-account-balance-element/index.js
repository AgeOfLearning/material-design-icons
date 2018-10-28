import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccountBalanceElement
 * @class IconSharpAccountBalanceElement
 * @extends {AoflElement}
 */
class IconSharpAccountBalanceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccountBalanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-account-balance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccountBalanceElement.is, IconSharpAccountBalanceElement);

export default IconSharpAccountBalanceElement;
