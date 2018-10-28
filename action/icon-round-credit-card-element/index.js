import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCreditCardElement
 * @class IconRoundCreditCardElement
 * @extends {AoflElement}
 */
class IconRoundCreditCardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCreditCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-credit-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCreditCardElement.is, IconRoundCreditCardElement);

export default IconRoundCreditCardElement;
