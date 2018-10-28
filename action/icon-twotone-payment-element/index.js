import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePaymentElement
 * @class IconTwotonePaymentElement
 * @extends {AoflElement}
 */
class IconTwotonePaymentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePaymentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-payment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePaymentElement.is, IconTwotonePaymentElement);

export default IconTwotonePaymentElement;
