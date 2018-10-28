import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePaymentElement
 * @class IconBaselinePaymentElement
 * @extends {AoflElement}
 */
class IconBaselinePaymentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePaymentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-payment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePaymentElement.is, IconBaselinePaymentElement);

export default IconBaselinePaymentElement;
