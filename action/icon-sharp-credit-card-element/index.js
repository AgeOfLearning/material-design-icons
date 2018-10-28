import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCreditCardElement
 * @class IconSharpCreditCardElement
 * @extends {AoflElement}
 */
class IconSharpCreditCardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCreditCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-credit-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCreditCardElement.is, IconSharpCreditCardElement);

export default IconSharpCreditCardElement;
