import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPaymentElement
 * @class IconSharpPaymentElement
 * @extends {AoflElement}
 */
class IconSharpPaymentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPaymentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-payment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPaymentElement.is, IconSharpPaymentElement);

export default IconSharpPaymentElement;
