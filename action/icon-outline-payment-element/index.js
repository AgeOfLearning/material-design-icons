import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePaymentElement
 * @class IconOutlinePaymentElement
 * @extends {AoflElement}
 */
class IconOutlinePaymentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePaymentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-payment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePaymentElement.is, IconOutlinePaymentElement);

export default IconOutlinePaymentElement;
