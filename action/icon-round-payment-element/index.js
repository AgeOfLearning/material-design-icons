import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPaymentElement
 * @class IconRoundPaymentElement
 * @extends {AoflElement}
 */
class IconRoundPaymentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPaymentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-payment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPaymentElement.is, IconRoundPaymentElement);

export default IconRoundPaymentElement;
